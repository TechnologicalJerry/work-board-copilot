import type { ICondition } from '../models/AutomationRule';

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((acc: unknown, key) => {
    if (acc === null || acc === undefined) return undefined;
    return (acc as Record<string, unknown>)[key];
  }, obj);
}

function evaluateCondition(condition: ICondition, data: Record<string, unknown>): boolean {
  const value = getNestedValue(data, condition.field);
  const expected = condition.value;

  switch (condition.operator) {
    case 'equals':
      return value === expected;
    case 'not_equals':
      return value !== expected;
    case 'contains':
      if (typeof value === 'string' && typeof expected === 'string') {
        return value.includes(expected);
      }
      if (Array.isArray(value)) {
        return value.includes(expected);
      }
      return false;
    case 'not_contains':
      if (typeof value === 'string' && typeof expected === 'string') {
        return !value.includes(expected);
      }
      if (Array.isArray(value)) {
        return !value.includes(expected);
      }
      return true;
    case 'greater_than':
      return typeof value === 'number' && typeof expected === 'number' && value > expected;
    case 'less_than':
      return typeof value === 'number' && typeof expected === 'number' && value < expected;
    case 'in':
      return Array.isArray(expected) && expected.includes(value);
    case 'not_in':
      return Array.isArray(expected) && !expected.includes(value);
    case 'is_empty':
      return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0);
    case 'is_not_empty':
      return value !== null && value !== undefined && value !== '' && !(Array.isArray(value) && value.length === 0);
    default:
      return false;
  }
}

export function evaluateConditions(conditions: ICondition[], data: Record<string, unknown>): boolean {
  if (conditions.length === 0) return true;
  return conditions.every((condition) => evaluateCondition(condition, data));
}
