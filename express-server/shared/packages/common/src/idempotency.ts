import { sha256 } from './crypto';

export interface IdempotencyStore {
  get(key: string): Promise<unknown | null>;
  set(key: string, value: unknown, ttlSeconds: number): Promise<void>;
}

export class IdempotencyService {
  constructor(
    private readonly store: IdempotencyStore,
    private readonly ttlSeconds = 86400
  ) {}

  generateKey(requestId: string, userId: string, endpoint: string): string {
    return sha256(`${requestId}:${userId}:${endpoint}`);
  }

  async getStoredResponse(key: string): Promise<unknown | null> {
    return this.store.get(key);
  }

  async storeResponse(key: string, response: unknown): Promise<void> {
    await this.store.set(key, response, this.ttlSeconds);
  }
}
