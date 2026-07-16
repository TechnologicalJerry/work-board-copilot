import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import logger from '@boardpilot/logger';

const MAX_RETRIES = 3;
const BASE_DELAY_MS = 300;

interface CircuitBreakerState {
  failures: number;
  lastFailure: number;
  state: 'closed' | 'open' | 'half-open';
}

const circuitBreakers = new Map<string, CircuitBreakerState>();
const CIRCUIT_OPEN_DURATION_MS = 30000;
const FAILURE_THRESHOLD = 5;

function getCircuitBreaker(serviceUrl: string): CircuitBreakerState {
  if (!circuitBreakers.has(serviceUrl)) {
    circuitBreakers.set(serviceUrl, { failures: 0, lastFailure: 0, state: 'closed' });
  }
  return circuitBreakers.get(serviceUrl)!;
}

function isCircuitOpen(serviceUrl: string): boolean {
  const cb = getCircuitBreaker(serviceUrl);
  if (cb.state === 'open') {
    if (Date.now() - cb.lastFailure > CIRCUIT_OPEN_DURATION_MS) {
      cb.state = 'half-open';
      return false;
    }
    return true;
  }
  return false;
}

function recordSuccess(serviceUrl: string): void {
  const cb = getCircuitBreaker(serviceUrl);
  cb.failures = 0;
  cb.state = 'closed';
}

function recordFailure(serviceUrl: string): void {
  const cb = getCircuitBreaker(serviceUrl);
  cb.failures++;
  cb.lastFailure = Date.now();
  if (cb.failures >= FAILURE_THRESHOLD) {
    cb.state = 'open';
    logger.warn({ serviceUrl }, 'Circuit breaker opened');
  }
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const httpClient: AxiosInstance = axios.create({
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export async function get<T>(
  serviceUrl: string,
  path: string,
  headers?: Record<string, string>
): Promise<T> {
  if (isCircuitOpen(serviceUrl)) {
    throw new Error(`Circuit breaker open for ${serviceUrl}`);
  }

  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const config: AxiosRequestConfig = {
        headers: headers ?? {},
      };
      const response = await httpClient.get<{ data: T }>(`${serviceUrl}${path}`, config);
      recordSuccess(serviceUrl);
      return response.data.data;
    } catch (error: any) {
      lastError = error;
      const status = error?.response?.status;

      // Don't retry client errors (4xx)
      if (status && status >= 400 && status < 500) {
        recordFailure(serviceUrl);
        throw error;
      }

      if (attempt < MAX_RETRIES) {
        const delay = BASE_DELAY_MS * Math.pow(2, attempt - 1);
        logger.warn({ serviceUrl, path, attempt, delay }, 'Retrying request');
        await sleep(delay);
      } else {
        recordFailure(serviceUrl);
      }
    }
  }

  throw lastError ?? new Error(`Failed to call ${serviceUrl}${path}`);
}

export async function post<T>(
  serviceUrl: string,
  path: string,
  body: unknown,
  headers?: Record<string, string>
): Promise<T> {
  if (isCircuitOpen(serviceUrl)) {
    throw new Error(`Circuit breaker open for ${serviceUrl}`);
  }

  try {
    const response = await httpClient.post<{ data: T }>(`${serviceUrl}${path}`, body, { headers: headers ?? {} });
    recordSuccess(serviceUrl);
    return response.data.data;
  } catch (error) {
    recordFailure(serviceUrl);
    throw error;
  }
}
