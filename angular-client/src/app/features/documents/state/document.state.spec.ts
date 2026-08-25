import { TestBed } from '@angular/core/testing';
import { DocumentState } from './document.state';

describe('DocumentState', () => {
  let state: DocumentState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentState],
    });
    state = TestBed.inject(DocumentState);
  });

  it('should store documents and update active selection', () => {
    const doc = { id: 'doc-1', organizationId: 'o-1', workspaceId: 'ws-1', title: 'Tech Spec', type: 'spec' as const, visibility: 'private' as const };
    state.setDocuments([doc]);
    state.setSelectedDocument(doc);

    expect(state.documentCount()).toBe(1);
    expect(state.selectedDocument()?.title).toBe('Tech Spec');
  });
});
