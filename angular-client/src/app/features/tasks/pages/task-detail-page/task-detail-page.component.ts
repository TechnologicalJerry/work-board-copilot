import { Component, OnInit, inject, signal, input } from '@angular/core';
import { Router } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { TaskApiService } from '../../services/task-api.service';
import { TaskState } from '../../state/task.state';
import { TaskStatus } from '../../models/task.model';
import { CommentThreadComponent } from '@features/comments/components/comment-thread/comment-thread.component';
import { CommentApiService } from '@features/comments/services/comment-api.service';
import { CommentState } from '@features/comments/state/comment.state';
import { FileUploaderComponent } from '@features/files/components/file-uploader/file-uploader.component';
import { FileListComponent } from '@features/files/components/file-list/file-list.component';
import { FileApiService } from '@features/files/services/file-api.service';
import { FileState } from '@features/files/state/file.state';
import { OrganizationContextService } from '@core/context/organization-context.service';

@Component({
  selector: 'app-task-detail-page',
  standalone: true,
  imports: [PageHeaderComponent, CommentThreadComponent, FileUploaderComponent, FileListComponent],
  template: `
    @if (task(); as t) {
      <app-page-header
        [title]="t.title"
        [subtitle]="'Issue Details • Created ' + (t.createdAt || 'recently')"
      >
        <div class="flex items-center space-x-3">
          <button
            type="button"
            (click)="onDeleteTask()"
            class="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-medium text-xs border border-rose-500/20 transition-colors"
          >
            Delete Task
          </button>
        </div>
      </app-page-header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Main Task Content -->
        <div class="lg:col-span-2 space-y-6">
          <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div>
              <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">Description</h3>
              <p class="text-xs text-slate-200 leading-relaxed whitespace-pre-line">
                {{ t.description || 'No detailed description provided for this task.' }}
              </p>
            </div>

            <!-- Status Transitions Bar -->
            <div class="pt-6 border-t border-slate-800 space-y-3">
              <h4 class="text-xs font-bold text-slate-300">Transition Status:</h4>
              <div class="flex flex-wrap gap-2">
                @for (st of ['TODO', 'IN_PROGRESS', 'IN_REVIEW', 'DONE', 'CANCELLED']; track st) {
                  <button
                    type="button"
                    (click)="onTransitionStatus(st)"
                    [disabled]="t.status === st"
                    [class]="t.status === st ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'"
                    class="px-3 py-1.5 rounded-xl text-xs transition-colors disabled:opacity-50"
                  >
                    {{ st }}
                  </button>
                }
              </div>
            </div>
          </div>

          <!-- Attachments Section -->
          <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-3">File Attachments</h3>

            <app-file-uploader
              [isUploading]="isUploadingFile()"
              (fileSelected)="onUploadFile($event)"
            ></app-file-uploader>

            <app-file-list
              [files]="files()"
              (downloadFile)="onDownloadFile($event)"
              (deleteFile)="onDeleteFile($event)"
            ></app-file-list>
          </div>

          <!-- Discussion & Comments Section -->
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

        <!-- Sidebar Meta Panel -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-3">Task Information</h3>

          <div class="space-y-3 text-xs">
            <div class="flex justify-between text-slate-400">
              <span>Status:</span>
              <span class="font-bold text-indigo-400 font-mono">{{ t.status }}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Priority:</span>
              <span class="font-bold text-amber-400 font-mono">{{ t.priority || 'NONE' }}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Issue Type:</span>
              <span class="font-bold text-slate-200 font-mono">{{ t.type || 'TASK' }}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Story Points:</span>
              <span class="font-bold text-white font-mono">{{ t.storyPoints ?? '-' }}</span>
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class TaskDetailPageComponent implements OnInit {
  private readonly taskApi = inject(TaskApiService);
  private readonly taskState = inject(TaskState);
  private readonly commentApi = inject(CommentApiService);
  private readonly commentState = inject(CommentState);
  private readonly fileApi = inject(FileApiService);
  private readonly fileState = inject(FileState);
  private readonly orgContext = inject(OrganizationContextService);
  private readonly router = inject(Router);

  readonly id = input.required<string>();

  readonly isPostingComment = signal<boolean>(false);
  readonly isUploadingFile = signal<boolean>(false);

  readonly task = this.taskState.selectedTask;
  readonly comments = this.commentState.comments;
  readonly files = this.fileState.files;

  ngOnInit(): void {
    this.taskApi.getTaskById(this.id()).subscribe({
      next: (res) => this.taskState.setSelectedTask(res.data),
    });

    this.commentApi.getComments(this.id(), 'task').subscribe({
      next: (res) => this.commentState.setComments(res.data),
    });

    this.fileApi.getFilesForEntity(this.id(), 'task').subscribe({
      next: (res) => this.fileState.setFiles(res.data),
    });
  }

  onTransitionStatus(status: string): void {
    const t = this.task();
    if (!t) return;
    this.taskApi.changeStatus(t.id, status as TaskStatus).subscribe({
      next: (res) => this.taskState.setSelectedTask(res.data),
    });
  }

  onDeleteTask(): void {
    const t = this.task();
    if (!t) return;
    if (confirm('Delete this task?')) {
      this.taskApi.deleteTask(t.id).subscribe({
        next: () => {
          this.taskState.removeTask(t.id);
          this.router.navigate(['/tasks']);
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
      entityType: 'task',
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

  onUploadFile(file: File): void {
    const orgId = this.orgContext.organizationId();
    if (!orgId) return;

    this.isUploadingFile.set(true);
    this.fileApi.uploadFile({
      organizationId: orgId,
      entityId: this.id(),
      entityType: 'task',
      file,
    }).subscribe({
      next: (res) => {
        this.fileState.addFile(res.data);
        this.isUploadingFile.set(false);
      },
      error: () => this.isUploadingFile.set(false),
    });
  }

  onDownloadFile(fileId: string): void {
    this.fileApi.getDownloadUrl(fileId).subscribe({
      next: (res) => {
        if (res.data.downloadUrl) {
          window.open(res.data.downloadUrl, '_blank');
        }
      },
    });
  }

  onDeleteFile(fileId: string): void {
    this.fileApi.deleteFile(fileId).subscribe({
      next: () => this.fileState.removeFile(fileId),
    });
  }
}
