import { TestBed } from '@angular/core/testing';
import { FileState } from './file.state';

describe('FileState', () => {
  let state: FileState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileState],
    });
    state = TestBed.inject(FileState);
  });

  it('should manage file attachments and upload state', () => {
    state.setFiles([{ id: 'f-1', organizationId: 'o-1', originalName: 'image.png', mimeType: 'image/png', size: 1024 }]);
    expect(state.fileCount()).toBe(1);

    state.setUploading(true);
    state.setUploadProgress(50);
    expect(state.isUploading()).toBe(true);
    expect(state.uploadProgress()).toBe(50);
  });
});
