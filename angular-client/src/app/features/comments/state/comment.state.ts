import { Injectable, computed, signal } from '@angular/core';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentState {
  private readonly commentsSignal = signal<Comment[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Readonly signal of comments for current entity */
  readonly comments = this.commentsSignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Pinned comments */
  readonly pinnedComments = computed(() =>
    this.commentsSignal().filter((c) => c.isPinned)
  );

  /** Comment count */
  readonly commentCount = computed(() => this.commentsSignal().length);

  setComments(comments: Comment[]): void {
    this.commentsSignal.set(comments);
  }

  addComment(comment: Comment): void {
    this.commentsSignal.update((current) => [comment, ...current]);
  }

  updateComment(updated: Comment): void {
    this.commentsSignal.update((current) =>
      current.map((c) => (c.id === updated.id ? { ...c, ...updated } : c))
    );
  }

  removeComment(id: string): void {
    this.commentsSignal.update((current) => current.filter((c) => c.id !== id));
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
