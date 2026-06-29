import { CircuitBreaker, CircuitState } from '@boardpilot/common';
import { config } from '../config';
import { logger } from '@boardpilot/logger';

/**
 * ServiceCircuitBreaker manages a pool of CircuitBreaker instances,
 * one per downstream service name.
 *
 * This prevents cascading failures: if a service becomes unhealthy, its
 * circuit opens and requests fail fast rather than waiting for timeouts.
 */
export class ServiceCircuitBreaker {
  private readonly breakers = new Map<string, CircuitBreaker>();

  /**
   * Returns the CircuitBreaker for the given service, creating one if needed.
   */
  getBreaker(serviceName: string): CircuitBreaker {
    const existing = this.breakers.get(serviceName);
    if (existing) {
      return existing;
    }

    const breaker = new CircuitBreaker(serviceName, {
      failureThreshold: config.CIRCUIT_BREAKER_THRESHOLD,
      successThreshold: 2,
      timeout: config.CIRCUIT_BREAKER_TIMEOUT,
    });

    this.breakers.set(serviceName, breaker);

    logger.debug(
      {
        serviceName,
        failureThreshold: config.CIRCUIT_BREAKER_THRESHOLD,
        timeout: config.CIRCUIT_BREAKER_TIMEOUT,
      },
      'Circuit breaker created for service'
    );

    return breaker;
  }

  /**
   * Returns the current state of all registered circuit breakers.
   */
  getAllStatus(): Record<string, CircuitState> {
    const status: Record<string, CircuitState> = {};
    for (const [name, breaker] of this.breakers.entries()) {
      status[name] = breaker.getState();
    }
    return status;
  }

  /**
   * Resets the circuit breaker for a specific service (e.g., after manual intervention).
   */
  resetBreaker(serviceName: string): void {
    const breaker = this.breakers.get(serviceName);
    if (breaker) {
      breaker.reset();
      logger.info({ serviceName }, 'Circuit breaker manually reset');
    }
  }

  /**
   * Returns true when the circuit for the given service is currently open (failing fast).
   */
  isOpen(serviceName: string): boolean {
    const breaker = this.breakers.get(serviceName);
    if (!breaker) {
      return false;
    }
    return breaker.getState() === 'OPEN';
  }
}

export const serviceCircuitBreakers = new ServiceCircuitBreaker();
