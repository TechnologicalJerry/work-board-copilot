import { Injectable, computed, signal } from '@angular/core';
import { FileItem } from '../models/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileState {
  private readonly filesSignal = signal<FileItem[]>([]);
  private readonly isUploadingSignal = signal<boolean>(false);
  private readonly uploadProgressSignal = signal<number>(0);
  private readonly errorSignal = signal<string | null>(null);

  /** Signal of file attachments */
  readonly files = this.filesSignal.asReadonly();

  /** Signal of uploading status */
  readonly isUploading = this.isUploadingSignal.asReadonly();

  /** Signal of upload progress percentage */
  readonly uploadProgress = this.uploadProgressSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** File count */
  readonly fileCount = computed(() => this.filesSignal().length);

  setFiles(files: FileItem[]): void {
    this.filesSignal.set(files);
  }

  addFile(file: FileItem): void {
    this.filesSignal.update((current) => [file, ...current]);
  }

  removeFile(id: string): void {
    this.filesSignal.update((current) => current.filter((f) => f.id !== id));
  }

  setUploading(uploading: boolean): void {
    this.isUploadingSignal.set(uploading);
  }

  setUploadProgress(progress: number): void {
    this.uploadProgressSignal.set(progress);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
