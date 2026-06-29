import OpenAI from 'openai';
import { Response } from 'express';
import { config } from '../config';
import logger from '@boardpilot/logger';
import { SYSTEM_PROMPTS } from '../prompts';
import { TooManyRequestsError } from '@boardpilot/errors';
import { trackTokenUsage } from './redis.service';

let openaiClient: OpenAI | null = null;

export function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    openaiClient = new OpenAI({
      apiKey: config.OPENAI_API_KEY,
    });
  }
  return openaiClient;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface StreamChatOptions {
  messages: ChatMessage[];
  userId: string;
  res: Response;
  onComplete?: (content: string, usage: OpenAI.CompletionUsage | undefined) => Promise<void>;
}

/**
 * Stream a chat completion as Server-Sent Events.
 * Writes SSE frames to the response and calls onComplete when done.
 */
export async function streamChatCompletion(options: StreamChatOptions): Promise<void> {
  const { messages, userId, res, onComplete } = options;
  const client = getOpenAIClient();

  // Setup SSE headers
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  let fullContent = '';
  let usage: OpenAI.CompletionUsage | undefined;

  try {
    const stream = await client.chat.completions.create({
      model: config.OPENAI_MODEL,
      messages: messages as OpenAI.ChatCompletionMessageParam[],
      stream: true,
      max_tokens: config.AI_MAX_TOKENS_PER_REQUEST,
      temperature: 0.7,
      stream_options: { include_usage: true },
    });

    for await (const chunk of stream) {
      const delta = chunk.choices[0]?.delta?.content ?? '';
      if (delta) {
        fullContent += delta;
        res.write(`data: ${JSON.stringify({ type: 'delta', content: delta })}\n\n`);
      }

      if (chunk.usage) {
        usage = chunk.usage;
      }

      if (chunk.choices[0]?.finish_reason === 'stop') {
        break;
      }
    }

    // Check and update token usage
    const totalTokens = usage?.total_tokens ?? estimateTokens(fullContent);
    const tokenStatus = await trackTokenUsage(userId, totalTokens);

    res.write(
      `data: ${JSON.stringify({
        type: 'done',
        usage: { totalTokens, ...tokenStatus },
      })}\n\n`
    );

    if (onComplete) {
      await onComplete(fullContent, usage);
    }
  } catch (error) {
    logger.error({ error, userId }, 'OpenAI streaming error');

    if (error instanceof OpenAI.APIError && error.status === 429) {
      res.write(
        `data: ${JSON.stringify({
          type: 'error',
          message: 'Rate limit exceeded. Please try again later.',
          code: 'OPENAI_RATE_LIMIT',
        })}\n\n`
      );
    } else {
      res.write(
        `data: ${JSON.stringify({
          type: 'error',
          message: 'AI generation failed. Please try again.',
          code: 'AI_ERROR',
        })}\n\n`
      );
    }
  } finally {
    res.end();
  }
}

/**
 * Non-streaming completion for structured JSON responses.
 */
export async function getChatCompletion(
  messages: ChatMessage[],
  userId: string,
  options: { temperature?: number; responseFormat?: 'json' } = {}
): Promise<{ content: string; usage: OpenAI.CompletionUsage | undefined }> {
  const client = getOpenAIClient();

  // Check token budget before making the call
  const { remaining } = await trackTokenUsage(userId, 0);
  if (remaining <= 0) {
    throw new TooManyRequestsError('AI token limit exceeded for this hour. Please try again later.');
  }

  const completionParams: OpenAI.ChatCompletionCreateParamsNonStreaming = {
    model: config.OPENAI_MODEL,
    messages: messages as OpenAI.ChatCompletionMessageParam[],
    max_tokens: config.AI_MAX_TOKENS_PER_REQUEST,
    temperature: options.temperature ?? 0.3,
    stream: false,
  };

  if (options.responseFormat === 'json') {
    completionParams.response_format = { type: 'json_object' };
  }

  try {
    const response = await client.chat.completions.create(completionParams);
    const content = response.choices[0]?.message?.content ?? '';
    const usage = response.usage ?? undefined;

    // Track tokens used
    const tokensUsed = usage?.total_tokens ?? estimateTokens(content);
    await trackTokenUsage(userId, tokensUsed);

    return { content, usage };
  } catch (error) {
    if (error instanceof OpenAI.APIError && error.status === 429) {
      throw new TooManyRequestsError('OpenAI rate limit exceeded. Please try again later.');
    }
    throw error;
  }
}

/**
 * Build message array for structured AI sessions.
 */
export function buildMessages(
  systemPrompt: string,
  userContent: string,
  history: ChatMessage[] = []
): ChatMessage[] {
  const messages: ChatMessage[] = [
    { role: 'system', content: systemPrompt },
    ...history.slice(-20), // Keep last 20 messages for context
    { role: 'user', content: userContent },
  ];
  return messages;
}

/**
 * Rough token estimator (4 chars ≈ 1 token).
 */
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

export { SYSTEM_PROMPTS };
