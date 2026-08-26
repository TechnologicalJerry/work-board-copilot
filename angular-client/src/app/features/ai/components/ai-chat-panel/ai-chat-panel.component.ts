import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ChatMessage } from '../../models/ai.model';

@Component({
  selector: 'app-ai-chat-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="flex flex-col h-[600px] rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
      <!-- Chat Header -->
      <div class="p-4 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-xs">
            🤖
          </div>
          <div>
            <h3 class="text-xs font-bold text-white">AI Copilot Assistant</h3>
            <span class="text-[10px] text-slate-500 font-mono">GPT-4 Context Engine</span>
          </div>
        </div>
      </div>

      <!-- Messages Stream -->
      <div class="flex-1 p-4 overflow-y-auto space-y-4">
        @for (m of messages(); track m.id) {
          <div [class]="m.sender === 'user' ? 'flex justify-end' : 'flex justify-start'">
            <div
              [class]="m.sender === 'user' ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-none' : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-2xl rounded-tl-none'"
              class="max-w-lg p-3.5 text-xs leading-relaxed shadow-md whitespace-pre-line"
            >
              {{ m.content }}
              <div class="text-[9px] opacity-60 font-mono mt-1 text-right">{{ m.timestamp }}</div>
            </div>
          </div>
        } @empty {
          <div class="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500 space-y-2">
            <span class="text-3xl">✨</span>
            <h4 class="text-xs font-bold text-white">How can AI Copilot help today?</h4>
            <p class="text-[11px] max-w-sm">Ask questions about sprint velocity, break down epics into subtasks, or summarize meeting notes.</p>
          </div>
        }

        @if (isGenerating()) {
          <div class="flex justify-start">
            <div class="p-3 rounded-2xl rounded-tl-none bg-slate-950 border border-slate-800 text-xs text-indigo-400 font-mono flex items-center space-x-2">
              <span class="animate-spin">⏳</span>
              <span>Copilot is thinking...</span>
            </div>
          </div>
        }
      </div>

      <!-- Input Form -->
      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="p-3 border-t border-slate-800 bg-slate-950 flex items-center space-x-2">
        <input
          type="text"
          formControlName="message"
          placeholder="Ask Copilot a question..."
          class="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <button
          type="submit"
          [disabled]="form.invalid || isGenerating()"
          class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all"
        >
          Send
        </button>
      </form>
    </div>
  `,
})
export class AiChatPanelComponent {
  private readonly fb = inject(FormBuilder);

  readonly messages = input.required<ChatMessage[]>();
  readonly isGenerating = input<boolean>(false);

  readonly sendMessage = output<string>();

  readonly form = this.fb.group({
    message: ['', [Validators.required, Validators.minLength(1)]],
  });

  onSubmit(): void {
    if (this.form.valid) {
      const msg = this.form.value.message!.trim();
      this.sendMessage.emit(msg);
      this.form.reset();
    }
  }
}
