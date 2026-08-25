import { Injectable, computed, signal } from '@angular/core';
import { Board, BoardColumn, BoardSwimlane } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardState {
  private readonly boardsSignal = signal<Board[]>([]);
  private readonly selectedBoardSignal = signal<Board | null>(null);
  private readonly columnsSignal = signal<BoardColumn[]>([]);
  private readonly swimlanesSignal = signal<BoardSwimlane[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Signal of boards list */
  readonly boards = this.boardsSignal.asReadonly();

  /** Signal of active selected board */
  readonly selectedBoard = this.selectedBoardSignal.asReadonly();

  /** Signal of board columns */
  readonly columns = this.columnsSignal.asReadonly();

  /** Signal of board swimlanes */
  readonly swimlanes = this.swimlanesSignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Columns sorted by position */
  readonly sortedColumns = computed(() =>
    [...this.columnsSignal()].sort((a, b) => a.position - b.position)
  );

  setBoards(boards: Board[]): void {
    this.boardsSignal.set(boards);
  }

  setSelectedBoard(board: Board | null): void {
    this.selectedBoardSignal.set(board);
    if (board?.columns) {
      this.columnsSignal.set(board.columns);
    }
    if (board?.swimlanes) {
      this.swimlanesSignal.set(board.swimlanes);
    }
  }

  setColumns(columns: BoardColumn[]): void {
    this.columnsSignal.set(columns);
  }

  setSwimlanes(swimlanes: BoardSwimlane[]): void {
    this.swimlanesSignal.set(swimlanes);
  }

  addBoard(board: Board): void {
    this.boardsSignal.update((current) => [board, ...current]);
  }

  updateBoard(updated: Board): void {
    this.boardsSignal.update((current) =>
      current.map((b) => (b.id === updated.id ? { ...b, ...updated } : b))
    );
    if (this.selectedBoardSignal()?.id === updated.id) {
      this.selectedBoardSignal.set(updated);
    }
  }

  removeBoard(id: string): void {
    this.boardsSignal.update((current) => current.filter((b) => b.id !== id));
    if (this.selectedBoardSignal()?.id === id) {
      this.selectedBoardSignal.set(null);
    }
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
