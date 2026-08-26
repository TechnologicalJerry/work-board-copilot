export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatRequest {
  message: string;
  sessionId?: string;
  context?: Record<string, unknown>;
}

export interface ChatResponse {
  response: string;
  sessionId: string;
  tokensUsed?: number;
}

export interface AiSession {
  sessionId: string;
  sessionType: string;
  status: 'active' | 'completed' | 'failed';
  createdAt?: string;
}

export interface TaskBreakdownItem {
  title: string;
  description: string;
  type: string;
  estimatedStoryPoints?: number;
}

export interface TaskBreakdownRequest {
  epicTitle: string;
  epicDescription: string;
  acceptanceCriteria?: string;
}

export interface TaskBreakdownResponse {
  suggestedTasks: TaskBreakdownItem[];
}

export interface TokenUsage {
  totalTokensUsed: number;
  promptTokens: number;
  completionTokens: number;
}
