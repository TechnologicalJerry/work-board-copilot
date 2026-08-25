import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  template: `
    <div
      (dragover)="onDragOver($event)"
      (dragleave)="onDragLeave($event)"
      (drop)="onDrop($event)"
      [class.border-indigo-500]="isDragging()"
      [class.bg-indigo-950\/10]="isDragging()"
      class="p-6 rounded-2xl border-2 border-dashed border-slate-800 bg-slate-950 text-center transition-all cursor-pointer relative"
    >
      <input
        type="file"
        (change)="onFileSelected($event)"
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />

      <div class="space-y-2 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-slate-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <div class="text-xs font-semibold text-white">
          <span>Click or drag file to attach</span>
        </div>
        <p class="text-[10px] text-slate-500">Maximum file size: 100MB</p>
      </div>

      @if (isUploading()) {
        <div class="mt-3 pt-3 border-t border-slate-800/80">
          <div class="flex justify-between text-[10px] text-slate-400 mb-1">
            <span>Uploading attachment...</span>
            <span>{{ progress() }}%</span>
          </div>
          <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
            <div class="h-full bg-indigo-600 transition-all duration-200" [style.width.%]="progress()"></div>
          </div>
        </div>
      }
    </div>
  `,
})
export class FileUploaderComponent {
  readonly isUploading = input<boolean>(false);
  readonly progress = input<number>(0);

  readonly fileSelected = output<File>();

  readonly isDragging = signal<boolean>(false);

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging.set(true);
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging.set(false);
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      if (file.size <= 100 * 1024 * 1024) {
        this.fileSelected.emit(file);
      } else {
        alert('File exceeds maximum size limit of 100MB.');
      }
    }
  }

  onFileSelected(event: Event): void {
    const inputEl = event.target as HTMLInputElement;
    if (inputEl.files && inputEl.files.length > 0) {
      const file = inputEl.files[0];
      if (file.size <= 100 * 1024 * 1024) {
        this.fileSelected.emit(file);
      } else {
        alert('File exceeds maximum size limit of 100MB.');
      }
    }
  }
}
