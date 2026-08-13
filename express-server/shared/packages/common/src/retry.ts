export interface RetryOptions {
  maxAttempts: number;
  delay: number;
  backoff: 'fixed' | 'exponential';
  maxDelay?: number;
  retryOn?: (error: Error) => boolean;
}

const DEFAULT_OPTIONS: RetryOptions = {
  maxAttempts: 3,
  delay: 1000,
  backoff: 'exponential',
  maxDelay: 30000,
};

export async function withRetry<T>(
  fn: () => Promise<T>,
  options: Partial<RetryOptions> = {}
): Promise<T> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  let lastError: Error;

  for (let attempt = 1; attempt <= opts.maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (opts.retryOn && !opts.retryOn(lastError)) {
        throw lastError;
      }

      if (attempt === opts.maxAttempts) {
        throw lastError;
      }

      const delay =
        opts.backoff === 'exponential'
          ? Math.min(opts.delay * Math.pow(2, attempt - 1), opts.maxDelay ?? Infinity)
          : opts.delay;

      await sleep(delay);
    }
  }

  throw lastError!;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
