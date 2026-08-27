import { Component, OnInit, inject } from '@angular/core';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { AiApiService } from '../../services/ai-api.service';
import { AiState } from '../../state/ai.state';
import { AiChatPanelComponent } from '../../components/ai-chat-panel/ai-chat-panel.component';
import { ChatMessage } from '../../models/ai.model';

@Component({
  selector: 'app-ai-copilot-page',
  standalone: true,
  imports: [PageHeaderComponent, AiChatPanelComponent],
  template: `
    <app-page-header
      title="AI Copilot Intelligence"
      subtitle="Contextual AI assistant for task breakdown, sprint planning risks, and automated standup summaries."
    ></app-page-header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <!-- Main Chat Panel -->
      <div class="lg:col-span-2">
        <app-ai-chat-panel
          [messages]="messages()"
          [isGenerating]="isGenerating()"
          (sendMessage)="onSendMessage($event)"
        ></app-ai-chat-panel>
      </div>

      <!-- Sidebar Usage & Actions -->
      <div class="space-y-6">
        <!-- Token Usage -->
        <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Token Usage Meter</h3>
          <div class="space-y-2">
            <div class="flex justify-between text-xs text-slate-300 font-mono">
              <span>Total Tokens:</span>
              <span class="font-bold text-indigo-400">{{ tokenUsage()?.totalTokensUsed ?? 0 }}</span>
            </div>
            <div class="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
              <div class="h-full bg-indigo-600 w-1/4"></div>
            </div>
          </div>
        </div>

        <!-- Quick AI Assistance Prompts -->
        <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Quick Actions</h3>
          <div class="space-y-2">
            <button
              type="button"
              (click)="onSendMessage('Can you break down our next epic into technical subtasks?')"
              class="w-full p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left text-xs text-slate-200 transition-colors"
            >
              ⚡ Break Down Epic Subtasks
            </button>
            <button
              type="button"
              (click)="onSendMessage('Analyze sprint velocity risks for current active sprint.')"
              class="w-full p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left text-xs text-slate-200 transition-colors"
            >
              📊 Sprint Velocity Risk Analysis
            </button>
            <button
              type="button"
              (click)="onSendMessage('Generate a daily standup summary for the team.')"
              class="w-full p-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left text-xs text-slate-200 transition-colors"
            >
              📝 Generate Standup Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AiCopilotPageComponent implements OnInit {
  private readonly aiApi = inject(AiApiService);
  private readonly aiState = inject(AiState);

  readonly messages = this.aiState.messages;
  readonly isGenerating = this.aiState.isGenerating;
  readonly tokenUsage = this.aiState.tokenUsage;

  ngOnInit(): void {
    this.aiApi.getTokenUsage().subscribe({
      next: (res) => this.aiState.setTokenUsage(res.data),
    });
  }

  onSendMessage(message: string): void {
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    this.aiState.addMessage(userMsg);
    this.aiState.setGenerating(true);

    this.aiApi.chat({ message }).subscribe({
      next: (res) => {
        const assistantMsg: ChatMessage = {
          id: String(Date.now() + 1),
          sender: 'assistant',
          content: res.data.response,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        this.aiState.addMessage(assistantMsg);
        this.aiState.setGenerating(false);
      },
      error: (err) => {
        this.aiState.setError(err.message);
        this.aiState.setGenerating(false);
      },
    });
  }
}
