import { Board, BoardColumn, Swimlane, BoardFilter } from '@prisma/client';
import { PaginatedResult, EventMetadata } from '@boardpilot/types';
import { NotFoundError, ForbiddenError, ConflictError } from '@boardpilot/errors';
import { buildPaginatedResult, parsePaginationQuery } from '@boardpilot/common';
import logger from '@boardpilot/logger';
import { boardRepository, BoardWithDetails } from './board.repository';
import { BoardEventPublisher } from './board.events';
import { getCached, setCached, deleteCached } from '../../database/redis';
import { config } from '../../config';
import {
  CreateBoardInput,
  UpdateBoardInput,
  CreateColumnInput,
  UpdateColumnInput,
  ReorderColumnsInput,
  CreateSwimlaneInput,
  UpdateSwimlaneInput,
  CreateFilterInput,
  ListBoardsInput,
} from './board.schema';

const CACHE_TTL_BOARD = 300;
const CACHE_TTL_LIST = 60;
const CACHE_TTL_COLUMNS = 120;
const CACHE_TTL_SWIMLANES = 120;

const cacheKey = {
  board: (id: string) => `board:${id}`,
  boardList: (projectId: string) => `boards:project:${projectId}`,
  columns: (boardId: string) => `board:${boardId}:columns`,
  swimlanes: (boardId: string) => `board:${boardId}:swimlanes`,
};

const DEFAULT_KANBAN_COLUMNS = [
  { name: 'TODO', position: 0, taskStatus: 'todo', isDone: false, isCollapsed: false },
  { name: 'IN_PROGRESS', position: 1, taskStatus: 'in_progress', isDone: false, isCollapsed: false },
  { name: 'IN_REVIEW', position: 2, taskStatus: 'in_review', isDone: false, isCollapsed: false },
  { name: 'DONE', position: 3, taskStatus: 'done', isDone: true, isCollapsed: false },
];

export class BoardService {
  constructor(private readonly eventPublisher: BoardEventPublisher | null = null) {}

  private buildMetadata(
    userId: string,
    organizationId?: string,
    workspaceId?: string,
    correlationId = 'unknown'
  ): EventMetadata {
    return { correlationId, userId, organizationId, workspaceId };
  }

  // ─── Board Operations ────────────────────────────────────────────────────────

  async createBoard(
    input: CreateBoardInput,
    userId: string,
    organizationId?: string,
    workspaceId?: string,
    correlationId?: string
  ): Promise<Board> {
    const { columns: inputColumns, ...boardData } = input;

    // Determine columns for creation
    let columnsToCreate: CreateBoardInput['columns'];
    if (input.type === 'KANBAN' || (!input.type && !inputColumns)) {
      columnsToCreate = inputColumns && inputColumns.length > 0
        ? inputColumns
        : DEFAULT_KANBAN_COLUMNS;
    } else {
      columnsToCreate = inputColumns;
    }

    const board = await boardRepository.create({
      ...boardData,
      createdBy: userId,
      updatedBy: userId,
      columns: columnsToCreate,
    });

    // Invalidate project list cache
    await deleteCached(cacheKey.boardList(input.projectId));

    logger.info({ boardId: board.id, projectId: input.projectId }, 'Board created');

    if (this.eventPublisher) {
      const metadata = this.buildMetadata(userId, organizationId, workspaceId, correlationId);
      await this.eventPublisher.publishBoardCreated(board as unknown as Record<string, unknown>, metadata);
    }

    return board;
  }

  async getBoards(
    query: ListBoardsInput,
    _userId: string
  ): Promise<PaginatedResult<Board>> {
    const pagination = parsePaginationQuery(query as Record<string, unknown>);
    const cacheKeyStr = `${cacheKey.boardList(query.projectId)}:page=${pagination.page}:limit=${pagination.limit}:sort=${pagination.sortBy}:order=${pagination.sortOrder}`;

    const cached = await getCached<PaginatedResult<Board>>(cacheKeyStr);
    if (cached) {
      return cached;
    }

    const { boards, total } = await boardRepository.findByProjectId(query.projectId, pagination);
    const result = buildPaginatedResult(boards, total, pagination);

    await setCached(cacheKeyStr, result, CACHE_TTL_LIST);
    return result;
  }

  async getBoardById(boardId: string): Promise<BoardWithDetails> {
    const cached = await getCached<BoardWithDetails>(cacheKey.board(boardId));
    if (cached) {
      return cached;
    }

    const board = await boardRepository.findWithDetails(boardId);
    if (!board) {
      throw new NotFoundError('Board', boardId);
    }

    await setCached(cacheKey.board(boardId), board, CACHE_TTL_BOARD);
    return board;
  }

  async updateBoard(
    boardId: string,
    input: UpdateBoardInput,
    userId: string,
    organizationId?: string,
    workspaceId?: string,
    correlationId?: string
  ): Promise<Board> {
    const existing = await boardRepository.findById(boardId);
    if (!existing) {
      throw new NotFoundError('Board', boardId);
    }

    const updated = await boardRepository.update(boardId, {
      ...input,
      updatedBy: userId,
    });

    await deleteCached(
      cacheKey.board(boardId),
      cacheKey.boardList(existing.projectId)
    );

    logger.info({ boardId }, 'Board updated');

    if (this.eventPublisher) {
      const metadata = this.buildMetadata(userId, organizationId, workspaceId, correlationId);
      await this.eventPublisher.publishBoardUpdated(updated as unknown as Record<string, unknown>, metadata);
    }

    return updated;
  }

  async deleteBoard(
    boardId: string,
    userId: string,
    organizationId?: string,
    workspaceId?: string,
    correlationId?: string
  ): Promise<void> {
    const existing = await boardRepository.findById(boardId);
    if (!existing) {
      throw new NotFoundError('Board', boardId);
    }

    await boardRepository.softDelete(boardId, userId);

    await deleteCached(
      cacheKey.board(boardId),
      cacheKey.boardList(existing.projectId),
      cacheKey.columns(boardId),
      cacheKey.swimlanes(boardId)
    );

    logger.info({ boardId }, 'Board deleted');

    if (this.eventPublisher) {
      const metadata = this.buildMetadata(userId, organizationId, workspaceId, correlationId);
      await this.eventPublisher.publishBoardDeleted(boardId, metadata);
    }
  }

  // ─── Column Operations ───────────────────────────────────────────────────────

  async getColumns(boardId: string): Promise<BoardColumn[]> {
    const cached = await getCached<BoardColumn[]>(cacheKey.columns(boardId));
    if (cached) {
      return cached;
    }

    await this.ensureBoardExists(boardId);
    const columns = await boardRepository.findColumnsByBoardId(boardId);
    await setCached(cacheKey.columns(boardId), columns, CACHE_TTL_COLUMNS);
    return columns;
  }

  async addColumn(
    boardId: string,
    input: CreateColumnInput,
    userId: string,
    organizationId?: string,
    workspaceId?: string,
    correlationId?: string
  ): Promise<BoardColumn> {
    await this.ensureBoardExists(boardId);

    const column = await boardRepository.createColumn({ boardId, ...input });

    await deleteCached(cacheKey.columns(boardId), cacheKey.board(boardId));

    logger.info({ boardId, columnId: column.id }, 'Column created');

    if (this.eventPublisher) {
      const metadata = this.buildMetadata(userId, organizationId, workspaceId, correlationId);
      await this.eventPublisher.publishColumnCreated(column as unknown as Record<string, unknown>, metadata);
    }

    return column;
  }

  async updateColumn(
    boardId: string,
    columnId: string,
    input: UpdateColumnInput,
    userId: string,
    organizationId?: string,
    workspaceId?: string,
    correlationId?: string
  ): Promise<BoardColumn> {
    await this.ensureBoardExists(boardId);
    await this.ensureColumnBelongsToBoard(columnId, boardId);

    const updated = await boardRepository.updateColumn(columnId, input);

    await deleteCached(cacheKey.columns(boardId), cacheKey.board(boardId));

    logger.info({ boardId, columnId }, 'Column updated');

    if (this.eventPublisher) {
      const metadata = this.buildMetadata(userId, organizationId, workspaceId, correlationId);
      await this.eventPublisher.publishColumnUpdated(updated as unknown as Record<string, unknown>, metadata);
    }

    return updated;
  }

  async deleteColumn(
    boardId: string,
    columnId: string,
    userId: string,
    organizationId?: string,
    workspaceId?: string,
    correlationId?: string
  ): Promise<void> {
    await this.ensureBoardExists(boardId);
    await this.ensureColumnBelongsToBoard(columnId, boardId);

    await boardRepository.deleteColumn(columnId);

    await deleteCached(cacheKey.columns(boardId), cacheKey.board(boardId));

    logger.info({ boardId, columnId }, 'Column deleted');

    if (this.eventPublisher) {
      const metadata = this.buildMetadata(userId, organizationId, workspaceId, correlationId);
      await this.eventPublisher.publishColumnDeleted(columnId, metadata);
    }
  }

  async reorderColumns(
    boardId: string,
    input: ReorderColumnsInput,
    _userId: string
  ): Promise<BoardColumn[]> {
    await this.ensureBoardExists(boardId);

    await boardRepository.reorderColumns(input);

    await deleteCached(cacheKey.columns(boardId), cacheKey.board(boardId));

    const columns = await boardRepository.findColumnsByBoardId(boardId);
    await setCached(cacheKey.columns(boardId), columns, CACHE_TTL_COLUMNS);

    logger.info({ boardId }, 'Columns reordered');
    return columns;
  }

  // ─── Swimlane Operations ─────────────────────────────────────────────────────

  async getSwimlanes(boardId: string): Promise<Swimlane[]> {
    const cached = await getCached<Swimlane[]>(cacheKey.swimlanes(boardId));
    if (cached) {
      return cached;
    }

    await this.ensureBoardExists(boardId);
    const swimlanes = await boardRepository.findSwimlanesByBoardId(boardId);
    await setCached(cacheKey.swimlanes(boardId), swimlanes, CACHE_TTL_SWIMLANES);
    return swimlanes;
  }

  async addSwimlane(
    boardId: string,
    input: CreateSwimlaneInput,
    userId: string,
    organizationId?: string,
    workspaceId?: string,
    correlationId?: string
  ): Promise<Swimlane> {
    await this.ensureBoardExists(boardId);

    const swimlane = await boardRepository.createSwimlane({ boardId, ...input });

    await deleteCached(cacheKey.swimlanes(boardId), cacheKey.board(boardId));

    logger.info({ boardId, swimlaneId: swimlane.id }, 'Swimlane created');

    if (this.eventPublisher) {
      const metadata = this.buildMetadata(userId, organizationId, workspaceId, correlationId);
      await this.eventPublisher.publishSwimlaneCreated(swimlane as unknown as Record<string, unknown>, metadata);
    }

    return swimlane;
  }

  async updateSwimlane(
    boardId: string,
    swimlaneId: string,
    input: UpdateSwimlaneInput,
    userId: string,
    organizationId?: string,
    workspaceId?: string,
    correlationId?: string
  ): Promise<Swimlane> {
    await this.ensureBoardExists(boardId);
    await this.ensureSwimlaneBelongsToBoard(swimlaneId, boardId);

    const updated = await boardRepository.updateSwimlane(swimlaneId, input);

    await deleteCached(cacheKey.swimlanes(boardId), cacheKey.board(boardId));

    logger.info({ boardId, swimlaneId }, 'Swimlane updated');

    if (this.eventPublisher) {
      const metadata = this.buildMetadata(userId, organizationId, workspaceId, correlationId);
      await this.eventPublisher.publishSwimlaneUpdated(updated as unknown as Record<string, unknown>, metadata);
    }

    return updated;
  }

  async deleteSwimlane(boardId: string, swimlaneId: string, _userId: string): Promise<void> {
    await this.ensureBoardExists(boardId);
    await this.ensureSwimlaneBelongsToBoard(swimlaneId, boardId);

    await boardRepository.deleteSwimlane(swimlaneId);

    await deleteCached(cacheKey.swimlanes(boardId), cacheKey.board(boardId));

    logger.info({ boardId, swimlaneId }, 'Swimlane deleted');
  }

  // ─── Filter Operations ───────────────────────────────────────────────────────

  async getFilters(boardId: string, userId: string): Promise<BoardFilter[]> {
    await this.ensureBoardExists(boardId);
    return boardRepository.findFiltersByBoardAndUser(boardId, userId);
  }

  async saveFilter(
    boardId: string,
    input: CreateFilterInput,
    userId: string
  ): Promise<BoardFilter> {
    await this.ensureBoardExists(boardId);

    const filter = await boardRepository.createFilter({
      boardId,
      userId,
      ...input,
    });

    logger.info({ boardId, filterId: filter.id }, 'Filter saved');
    return filter;
  }

  async deleteFilter(boardId: string, filterId: string, userId: string): Promise<void> {
    await this.ensureBoardExists(boardId);

    const filter = await boardRepository.findFilterById(filterId);
    if (!filter) {
      throw new NotFoundError('Filter', filterId);
    }
    if (filter.boardId !== boardId) {
      throw new ForbiddenError('Filter does not belong to this board');
    }
    if (filter.userId !== userId) {
      throw new ForbiddenError('You can only delete your own filters');
    }

    await boardRepository.deleteFilter(filterId);
    logger.info({ boardId, filterId }, 'Filter deleted');
  }

  // ─── Private Helpers ─────────────────────────────────────────────────────────

  private async ensureBoardExists(boardId: string): Promise<Board> {
    const board = await boardRepository.findById(boardId);
    if (!board) {
      throw new NotFoundError('Board', boardId);
    }
    return board;
  }

  private async ensureColumnBelongsToBoard(columnId: string, boardId: string): Promise<BoardColumn> {
    const column = await boardRepository.findColumnById(columnId);
    if (!column) {
      throw new NotFoundError('Column', columnId);
    }
    if (column.boardId !== boardId) {
      throw new ForbiddenError('Column does not belong to this board');
    }
    return column;
  }

  private async ensureSwimlaneBelongsToBoard(swimlaneId: string, boardId: string): Promise<Swimlane> {
    const swimlane = await boardRepository.findSwimlaneById(swimlaneId);
    if (!swimlane) {
      throw new NotFoundError('Swimlane', swimlaneId);
    }
    if (swimlane.boardId !== boardId) {
      throw new ForbiddenError('Swimlane does not belong to this board');
    }
    return swimlane;
  }
}

// Singleton with lazy event publisher injection
let serviceInstance: BoardService | null = null;

export function getBoardService(eventPublisher?: BoardEventPublisher): BoardService {
  if (!serviceInstance) {
    serviceInstance = new BoardService(eventPublisher ?? null);
  }
  return serviceInstance;
}

export function setBoardServiceInstance(instance: BoardService): void {
  serviceInstance = instance;
}
