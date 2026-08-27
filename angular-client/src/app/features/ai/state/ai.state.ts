import { Injectable, computed, signal } from '@angular/core';
import { ChatMessage, AiSession, TokenUsage } from '../models/ai.model';

@Injectable({
  providedIn: 'root',
})
export class AiState {
  private readonly messagesSignal = signal<ChatMessage[]>([]);
  private readonly sessionsSignal = signal<AiSession[]>([]);
  private readonly activeSessionIdSignal = signal<string | null>(null);
  private readonly tokenUsageSignal = signal<TokenUsage | null>(null);
  private readonly generatingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly messages = this.messagesSignal.asReadonly();
  readonly sessions = this.sessionsSignal.asReadonly();
  readonly activeSessionId = this.activeSessionIdSignal.asReadonly();
  readonly tokenUsage = this.tokenUsageSignal.asReadonly();
  readonly isGenerating = this.generatingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  readonly messageCount = computed(() => this.messagesSignal().length);

  setMessages(messages: ChatMessage[]): void {
    this.messagesSignal.set(messages);
  }

  addMessage(msg: ChatMessage): void {
    this.messagesSignal.update((current) => [...current, msg]);
  }

  setSessions(sessions: AiSession[]): void {
    this.sessionsSignal.set(sessions);
  }

  setActiveSessionId(id: string | null): void {
    this.activeSessionIdSignal.set(id);
  }

  setTokenUsage(usage: TokenUsage | null): void {
    this.tokenUsageSignal.set(usage);
  }

  setGenerating(generating: boolean): void {
    this.generatingSignal.set(generating);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }

  clearChat(): void {
    this.messagesSignal.set([]);
  }
}
