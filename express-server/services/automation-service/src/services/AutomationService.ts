import { AutomationRule, IAutomationRule } from '../models/AutomationRule';
import prisma from '../infrastructure/database/prisma';
import { evaluateConditions } from './RuleEngine';
import { executeActions } from './ActionExecutor';
import { NotFoundError } from '@boardpilot/errors';
import logger from '@boardpilot/logger';
import type { FilterQuery } from 'mongoose';

export class AutomationService {
  async create(dto: {
    organizationId: string;
    projectId: string;
    name: string;
    description?: string;
    trigger: IAutomationRule['trigger'];
    actions: IAutomationRule['actions'];
    createdBy: string;
  }): Promise<IAutomationRule> {
    return AutomationRule.create(dto);
  }

  async findById(id: string): Promise<IAutomationRule> {
    const rule = await AutomationRule.findById(id);
    if (!rule) throw new NotFoundError('Automation rule not found');
    return rule;
  }

  async findAll(
    projectId: string,
    organizationId: string,
    page = 1,
    limit = 20,
  ): Promise<{ data: IAutomationRule[]; total: number; page: number; limit: number; totalPages: number }> {
    const filter: FilterQuery<IAutomationRule> = { projectId, organizationId };
    const [data, total] = await Promise.all([
      AutomationRule.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
      AutomationRule.countDocuments(filter),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async update(id: string, dto: Partial<IAutomationRule>): Promise<IAutomationRule> {
    const rule = await AutomationRule.findByIdAndUpdate(id, { $set: dto }, { new: true });
    if (!rule) throw new NotFoundError('Automation rule not found');
    return rule;
  }

  async delete(id: string): Promise<void> {
    const result = await AutomationRule.findByIdAndDelete(id);
    if (!result) throw new NotFoundError('Automation rule not found');
  }

  async enable(id: string): Promise<IAutomationRule> {
    return this.update(id, { isEnabled: true } as Partial<IAutomationRule>);
  }

  async disable(id: string): Promise<IAutomationRule> {
    return this.update(id, { isEnabled: false } as Partial<IAutomationRule>);
  }

  async processEvent(
    triggerType: string,
    projectId: string,
    organizationId: string,
    eventData: Record<string, unknown>,
  ): Promise<void> {
    const rules = await AutomationRule.find({
      projectId,
      organizationId,
      isEnabled: true,
      'trigger.type': triggerType,
    });

    if (rules.length === 0) return;

    for (const rule of rules) {
      const startTime = Date.now();
      const pass = evaluateConditions(rule.trigger.conditions, eventData);

      if (!pass) {
        await prisma.automationExecution.create({
          data: {
            ruleId: String(rule._id),
            triggeredBy: triggerType,
            triggerData: eventData,
            status: 'SKIPPED',
            actionsRun: 0,
            duration: Date.now() - startTime,
          },
        });
        continue;
      }

      try {
        const { executed, errors } = await executeActions(rule.actions, eventData);
        const status = errors.length === 0 ? 'SUCCESS' : executed > 0 ? 'PARTIAL' : 'FAILED';

        await Promise.all([
          prisma.automationExecution.create({
            data: {
              ruleId: String(rule._id),
              triggeredBy: triggerType,
              triggerData: eventData,
              status,
              actionsRun: executed,
              error: errors.length > 0 ? errors.join('; ') : undefined,
              duration: Date.now() - startTime,
            },
          }),
          AutomationRule.findByIdAndUpdate(rule._id, {
            $inc: { executionCount: 1 },
            lastExecutedAt: new Date(),
          }),
        ]);
      } catch (err) {
        logger.error({ err, ruleId: rule._id }, 'Automation rule execution failed');
        await prisma.automationExecution.create({
          data: {
            ruleId: String(rule._id),
            triggeredBy: triggerType,
            triggerData: eventData,
            status: 'FAILED',
            actionsRun: 0,
            error: err instanceof Error ? err.message : String(err),
            duration: Date.now() - startTime,
          },
        });
      }
    }
  }

  async getExecutions(
    ruleId: string,
    page = 1,
    limit = 20,
  ) {
    const [data, total] = await Promise.all([
      prisma.automationExecution.findMany({
        where: { ruleId },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.automationExecution.count({ where: { ruleId } }),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async testRule(
    id: string,
    eventData: Record<string, unknown>,
  ): Promise<{ conditionsMet: boolean; actionsExecuted: number; errors: string[] }> {
    const rule = await this.findById(id);
    const conditionsMet = evaluateConditions(rule.trigger.conditions, eventData);
    if (!conditionsMet) return { conditionsMet: false, actionsExecuted: 0, errors: [] };

    const { executed, errors } = await executeActions(rule.actions, eventData);
    return { conditionsMet: true, actionsExecuted: executed, errors };
  }
}
