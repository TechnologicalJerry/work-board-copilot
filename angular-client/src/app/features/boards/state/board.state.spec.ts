import { TestBed } from '@angular/core/testing';
import { BoardState } from './board.state';

describe('BoardState', () => {
  let state: BoardState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardState],
    });
    state = TestBed.inject(BoardState);
  });

  it('should store selected board and its columns', () => {
    const board = {
      id: 'b-1',
      projectId: 'p-1',
      name: 'Sprint Board',
      type: 'SCRUM' as const,
      columns: [
        { id: 'c-2', boardId: 'b-1', name: 'In Progress', status: 'IN_PROGRESS', position: 2 },
        { id: 'c-1', boardId: 'b-1', name: 'To Do', status: 'TODO', position: 1 },
      ],
    };

    state.setSelectedBoard(board);
    expect(state.selectedBoard()?.id).toBe('b-1');
    expect(state.sortedColumns()[0].name).toBe('To Do');
  });
});
