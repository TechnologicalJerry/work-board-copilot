import { Schema, model, Document } from 'mongoose';

export interface ICondition {
  field: string;
  operator: 'equals' | 'not_equals' | 'contains' | 'not_contains' | 'greater_than' | 'less_than' | 'in' | 'not_in' | 'is_empty' | 'is_not_empty';
  value?: unknown;
}

export interface IAction {
  type: 'set_status' | 'assign_user' | 'add_label' | 'send_notification' | 'call_webhook' | 'post_comment';
  config: Record<string, unknown>;
}

export interface ITrigger {
  type: 'task.status_changed' | 'task.assigned' | 'task.created' | 'task.updated' | 'sprint.started' | 'sprint.completed';
  conditions: ICondition[];
}

export interface IAutomationRule extends Document {
  organizationId: string;
  projectId: string;
  name: string;
  description?: string;
  isEnabled: boolean;
  trigger: ITrigger;
  actions: IAction[];
  executionCount: number;
  lastExecutedAt?: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const conditionSchema = new Schema<ICondition>(
  {
    field: { type: String, required: true },
    operator: { type: String, required: true },
    value: Schema.Types.Mixed,
  },
  { _id: false },
);

const actionSchema = new Schema<IAction>(
  {
    type: { type: String, required: true },
    config: { type: Schema.Types.Mixed, default: {} },
  },
  { _id: false },
);

const triggerSchema = new Schema<ITrigger>(
  {
    type: { type: String, required: true },
    conditions: { type: [conditionSchema], default: [] },
  },
  { _id: false },
);

const automationRuleSchema = new Schema<IAutomationRule>(
  {
    organizationId: { type: String, required: true, index: true },
    projectId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    description: String,
    isEnabled: { type: Boolean, default: true, index: true },
    trigger: { type: triggerSchema, required: true },
    actions: { type: [actionSchema], required: true },
    executionCount: { type: Number, default: 0 },
    lastExecutedAt: Date,
    createdBy: { type: String, required: true },
  },
  { timestamps: true },
);

export const AutomationRule = model<IAutomationRule>('AutomationRule', automationRuleSchema);
