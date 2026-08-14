import { AppError } from './AppError';

export class DomainError extends AppError {
  constructor(message: string, code: string, details?: Record<string, unknown>) {
    super(message, code, 422, true, details);
  }
}

export class BusinessRuleViolationError extends DomainError {
  constructor(rule: string, details?: Record<string, unknown>) {
    super(`Business rule violated: ${rule}`, 'BUSINESS_RULE_VIOLATION', details);
  }
}

export class InvariantViolationError extends DomainError {
  constructor(invariant: string) {
    super(`Invariant violated: ${invariant}`, 'INVARIANT_VIOLATION');
  }
}

export class EntityStateError extends DomainError {
  constructor(entity: string, currentState: string, action: string) {
    super(
      `Cannot perform '${action}' on ${entity} in state '${currentState}'`,
      'ENTITY_STATE_ERROR'
    );
  }
}

export class ConcurrencyError extends AppError {
  constructor(entity: string) {
    super(
      `Concurrent modification detected on ${entity}`,
      'CONCURRENCY_ERROR',
      409
    );
  }
}

export class IdempotencyError extends AppError {
  constructor(idempotencyKey: string) {
    super(
      `Request with idempotency key '${idempotencyKey}' already processed`,
      'IDEMPOTENCY_ERROR',
      409
    );
  }
}
