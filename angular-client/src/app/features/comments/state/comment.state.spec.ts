import { TestBed } from '@angular/core/testing';
import { CommentState } from './comment.state';

describe('CommentState', () => {
  let state: CommentState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentState],
    });
    state = TestBed.inject(CommentState);
  });

  it('should store comments and filter pinned comments', () => {
    state.setComments([
      { id: 'c-1', entityId: 't-1', entityType: 'task', projectId: 'p-1', organizationId: 'o-1', authorId: 'u-1', content: 'Normal', isPinned: false },
      { id: 'c-2', entityId: 't-1', entityType: 'task', projectId: 'p-1', organizationId: 'o-1', authorId: 'u-2', content: 'Important', isPinned: true },
    ]);

    expect(state.commentCount()).toBe(2);
    expect(state.pinnedComments().length).toBe(1);
    expect(state.pinnedComments()[0].id).toBe('c-2');
  });
});
