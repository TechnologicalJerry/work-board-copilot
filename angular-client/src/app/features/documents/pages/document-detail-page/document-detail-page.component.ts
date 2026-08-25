import { Component, OnInit, inject, signal, input } from '@angular/core';
import { Router } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { DocumentApiService } from '../../services/document-api.service';
import { DocumentState } from '../../state/document.state';
import { DocumentEditorComponent } from '../../components/document-editor/document-editor.component';
import { CommentThreadComponent } from '@features/comments/components/comment-thread/comment-thread.component';
import { CommentApiService } from '@features/comments/services/comment-api.service';
import { CommentState } from '@features/comments/state/comment.state';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { UpdateDocumentRequest } from '../../models/document.model';

@Component({
  selector: 'app-document-detail-page',
  standalone: true,
  imports: [PageHeaderComponent, DocumentEditorComponent, CommentThreadComponent],
  template: `
    @if (doc(); as d) {
      <app-page-header
        [title]="d.title"
        [subtitle]="'Document Page • Workspace Wiki • v' + (d.version ?? 1)"
      >
        <div class="flex items-center space-x-3">
          <button
            type="button"
            (click)="onDeleteDocument()"
            class="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-medium text-xs border border-rose-500/20 transition-colors"
          >
            Delete Document
          </button>
        </div>
      </app-page-header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Editor Column -->
        <div class="lg:col-span-2 space-y-6">
          <app-document-editor
            [document]="d"
            [isSaving]="isSaving()"
            (saveDocument)="onSaveDocument($event)"
          ></app-document-editor>

          <!-- Document Comments -->
          <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <app-comment-thread
              [comments]="comments()"
              [isPosting]="isPostingComment()"
              (addComment)="onAddComment($event)"
              (deleteComment)="onDeleteComment($event)"
              (addReaction)="onAddReaction($event)"
            ></app-comment-thread>
          </div>
        </div>

        <!-- Sidebar Meta -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-3">Document Info</h3>
          <div class="space-y-3 text-xs">
            <div class="flex justify-between text-slate-400">
              <span>Visibility:</span>
              <span class="font-bold text-slate-200 font-mono">{{ d.visibility || 'private' }}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Type:</span>
              <span class="font-bold text-slate-200 font-mono">{{ d.type || 'general' }}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Version:</span>
              <span class="font-bold text-indigo-400 font-mono">v{{ d.version ?? 1 }}</span>
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class DocumentDetailPageComponent implements OnInit {
  private readonly documentApi = inject(DocumentApiService);
  private readonly documentState = inject(DocumentState);
  private readonly commentApi = inject(CommentApiService);
  private readonly commentState = inject(CommentState);
  private readonly orgContext = inject(OrganizationContextService);
  private readonly router = inject(Router);

  readonly id = input.required<string>();

  readonly isSaving = signal<boolean>(false);
  readonly isPostingComment = signal<boolean>(false);

  readonly doc = this.documentState.selectedDocument;
  readonly comments = this.commentState.comments;

  ngOnInit(): void {
    this.documentApi.getDocumentById(this.id()).subscribe({
      next: (res) => this.documentState.setSelectedDocument(res.data),
    });

    this.commentApi.getComments(this.id(), 'document').subscribe({
      next: (res) => this.commentState.setComments(res.data),
    });
  }

  onSaveDocument(req: UpdateDocumentRequest): void {
    this.isSaving.set(true);
    this.documentApi.updateDocument(this.id(), req).subscribe({
      next: (res) => {
        this.documentState.updateDocument(res.data);
        this.isSaving.set(false);
      },
      error: (err) => {
        this.documentState.setError(err.message);
        this.isSaving.set(false);
      },
    });
  }

  onDeleteDocument(): void {
    if (confirm('Delete this document?')) {
      this.documentApi.deleteDocument(this.id()).subscribe({
        next: () => {
          this.documentState.removeDocument(this.id());
          this.router.navigate(['/documents']);
        },
      });
    }
  }

  onAddComment(content: string): void {
    const orgId = this.orgContext.organizationId();
    if (!orgId) return;

    this.isPostingComment.set(true);
    this.commentApi.createComment({
      entityId: this.id(),
      entityType: 'document',
      projectId: '00000000-0000-0000-0000-000000000000',
      organizationId: orgId,
      content,
    }).subscribe({
      next: (res) => {
        this.commentState.addComment(res.data);
        this.isPostingComment.set(false);
      },
      error: () => this.isPostingComment.set(false),
    });
  }

  onDeleteComment(commentId: string): void {
    this.commentApi.deleteComment(commentId).subscribe({
      next: () => this.commentState.removeComment(commentId),
    });
  }

  onAddReaction(event: { commentId: string; emoji: string }): void {
    this.commentApi.addReaction(event.commentId, { emoji: event.emoji }).subscribe({
      next: (res) => this.commentState.updateComment(res.data),
    });
  }
}
