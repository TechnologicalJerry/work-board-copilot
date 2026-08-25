import { Component, input, output, inject } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { CommentComposerComponent } from '../comment-composer/comment-composer.component';

@Component({
  selector: 'app-comment-thread',
  standalone: true,
  imports: [CommentComposerComponent],
  template: `
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 class="text-sm font-bold text-white flex items-center space-x-2">
          <span>Discussion & Comments</span>
          <span class="px-2 py-0.5 text-[10px] font-mono rounded-full bg-slate-800 text-slate-400">
            {{ comments().length }}
          </span>
        </h3>
      </div>

      <!-- Comments List -->
      <div class="space-y-4">
        @for (c of comments(); track c.id) {
          <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-indigo-600/20 text-indigo-400 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                  {{ c.author?.firstName?.charAt(0) ?? c.author?.email?.charAt(0) ?? 'C' }}
                </div>
                <div>
                  <div class="text-xs font-semibold text-white">
                    {{ c.author?.firstName ? (c.author?.firstName + ' ' + (c.author?.lastName ?? '')) : (c.author?.email || 'Member') }}
                  </div>
                  <div class="text-[10px] text-slate-500 font-mono">{{ c.createdAt || 'Just now' }}</div>
                </div>
              </div>

              <div class="flex items-center space-x-2">
                @if (c.isPinned) {
                  <span class="px-2 py-0.5 text-[9px] font-mono rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Pinned
                  </span>
                }
                @if (c.isResolved) {
                  <span class="px-2 py-0.5 text-[9px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Resolved
                  </span>
                }
                <button
                  type="button"
                  (click)="onDelete(c.id)"
                  class="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                  aria-label="Delete comment"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Content -->
            <p class="text-xs text-slate-200 leading-relaxed whitespace-pre-line pl-11">
              {{ c.content }}
            </p>

            <!-- Reactions Bar -->
            <div class="pl-11 flex items-center space-x-2 pt-1">
              <button
                type="button"
                (click)="onAddReaction(c.id, '👍')"
                class="px-2 py-0.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[10px] text-slate-400 transition-colors"
              >
                👍 Like
              </button>
              <button
                type="button"
                (click)="onAddReaction(c.id, '🎉')"
                class="px-2 py-0.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[10px] text-slate-400 transition-colors"
              >
                🎉 Celebrate
              </button>
            </div>
          </div>
        } @empty {
          <div class="py-8 text-center text-xs text-slate-500 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
            No comments yet. Be the first to start the discussion!
          </div>
        }
      </div>

      <!-- Add Comment Composer -->
      <app-comment-composer
        [isSubmitting]="isPosting()"
        (submitComment)="onPostComment($event)"
      ></app-comment-composer>
    </div>
  `,
})
export class CommentThreadComponent {
  readonly comments = input.required<Comment[]>();
  readonly isPosting = input<boolean>(false);

  readonly addComment = output<string>();
  readonly deleteComment = output<string>();
  readonly addReaction = output<{ commentId: string; emoji: string }>();

  onPostComment(content: string): void {
    this.addComment.emit(content);
  }

  onDelete(id: string): void {
    if (confirm('Delete this comment?')) {
      this.deleteComment.emit(id);
    }
  }

  onAddReaction(commentId: string, emoji: string): void {
    this.addReaction.emit({ commentId, emoji });
  }
}
