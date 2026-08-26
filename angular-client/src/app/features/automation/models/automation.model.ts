export type TriggerType =
  | 'task.status_changed'
  | 'task.assigned'
  | 'task.created'
  | 'task.updated'
  | 'sprint.started'
  | 'sprint.completed';

export type ConditionOperator =
  | 'equals'
  | 'not_equals'
  | 'contains'
  | 'not_contains'
  | 'greater_than'
  | 'less_than'
  | 'in'
  | 'not_in'
  | 'is_empty'
  | 'is_not_empty';

export type ActionType =
  | 'set_status'
  | 'assign_user'
  | 'add_label'
  | 'send_notification'
  | 'call_webhook'
  | 'post_comment';

export interface AutomationCondition {
  field: string;
  operator: ConditionOperator;
  value?: unknown;
}

export interface AutomationTrigger {
  type: TriggerType;
  conditions?: AutomationCondition[];
}

export interface AutomationAction {
  type: ActionType;
  config: Record<string, unknown>;
}

export interface AutomationRule {
  id: string;
  organizationId: string;
  projectId: string;
  name: string;
  description?: string;
  isEnabled: boolean;
  trigger: AutomationTrigger;
  actions: AutomationAction[];
  createdAt?: string;
  updatedAt?: string;
}

export interface AutomationExecution {
  id: string;
  ruleId: string;
  status: 'SUCCESS' | 'FAILED';
  triggerEvent: string;
  errorDetails?: string;
  createdAt?: string;
}

export interface CreateRuleRequest {
  organizationId: string;
  projectId: string;
  name: string;
  description?: string;
  trigger: AutomationTrigger;
  actions: AutomationAction[];
}

export interface UpdateRuleRequest {
  name?: string;
  description?: string;
  isEnabled?: boolean;
  trigger?: AutomationTrigger;
  actions?: AutomationAction[];
}
