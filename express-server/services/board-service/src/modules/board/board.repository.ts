import { Board, BoardColumn, Swimlane, BoardFilter, Prisma } from '../../generated/prisma-client';
import { PaginationOptions } from '@boardpilot/types';
import { calculateSkip } from '@boardpilot/common';
import prisma from '../../database/prisma';

export type BoardWithDetails = Board & {
  columns: BoardColumn[];
  swimlanes: Swimlane[];
};

export type CreateBoardData = Omit<
  Prisma.BoardCreateInput,
  'columns' | 'swimlanes'
> & {
  columns?: Omit<Prisma.BoardColumnCreateManyBoardInput, 'boardId'>[];
};

export type CreateColumnData = Omit<Prisma.BoardColumnCreateInput, 'board'> & {
  boardId: string;
};

export type CreateSwimlaneData = Omit<Prisma.SwimlaneCreateInput, 'board'> & {
  boardId: string;
};

export type CreateFilterData = Omit<Prisma.BoardFilterCreateInput, never>;

export class BoardRepository {
  // ─── Board CRUD ────────────────────────────────────────────────────────────

  async create(data: {
    name: string;
    projectId: string;
    type?: string;
    description?: string;
    isDefault?: boolean;
    settings?: Record<string, unknown>;
    createdBy: string;
    updatedBy: string;
    columns?: Array<{
      name: string;
      color?: string;
      wip?: number;
      position: number;
      taskStatus: string;
      isDone?: boolean;
      isCollapsed?: boolean;
    }>;
  }): Promise<Board> {
    const { columns, ...boardData } = data;

    return prisma.board.create({
      data: {
        ...boardData,
        type: (boardData.type ?? 'KANBAN') as Prisma.EnumBoardTypeFilter['equals'],
        settings: (boardData.settings ?? {}) as Prisma.InputJsonValue,
        columns: columns
          ? {
              createMany: {
                data: columns.map((col) => ({
                  name: col.name,
                  color: col.color,
                  wip: col.wip,
                  position: col.position,
                  taskStatus: col.taskStatus,
                  isDone: col.isDone ?? false,
                  isCollapsed: col.isCollapsed ?? false,
                })),
              },
            }
          : undefined,
      },
    });
  }

  async findById(id: string): Promise<Board | null> {
    return prisma.board.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async findWithDetails(id: string): Promise<BoardWithDetails | null> {
    return prisma.board.findFirst({
      where: { id, deletedAt: null },
      include: {
        columns: {
          orderBy: { position: 'asc' },
        },
        swimlanes: {
          orderBy: { position: 'asc' },
        },
      },
    });
  }

  async findByProjectId(
    projectId: string,
    pagination: PaginationOptions
  ): Promise<{ boards: Board[]; total: number }> {
    const skip = calculateSkip(pagination.page, pagination.limit);
    const orderBy: Prisma.BoardOrderByWithRelationInput = {
      [pagination.sortBy ?? 'createdAt']: pagination.sortOrder ?? 'desc',
    };

    const [boards, total] = await Promise.all([
      prisma.board.findMany({
        where: { projectId, deletedAt: null },
        orderBy,
        skip,
        take: pagination.limit,
      }),
      prisma.board.count({ where: { projectId, deletedAt: null } }),
    ]);

    return { boards, total };
  }

  async update(
    id: string,
    data: {
      name?: string;
      description?: string;
      type?: string;
      isDefault?: boolean;
      settings?: Record<string, unknown>;
      updatedBy: string;
    }
  ): Promise<Board> {
    return prisma.board.update({
      where: { id },
      data: {
        ...data,
        type: data.type as Prisma.EnumBoardTypeFilter['equals'] | undefined,
        settings: data.settings as Prisma.InputJsonValue | undefined,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Board> {
    return prisma.board.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        updatedBy: userId,
      },
    });
  }

  // ─── Column CRUD ────────────────────────────────────────────────────────────

  async createColumn(data: {
    boardId: string;
    name: string;
    color?: string;
    wip?: number;
    position: number;
    taskStatus: string;
    isDone?: boolean;
    isCollapsed?: boolean;
  }): Promise<BoardColumn> {
    const { boardId, ...rest } = data;
    return prisma.boardColumn.create({
      data: {
        ...rest,
        isDone: rest.isDone ?? false,
        isCollapsed: rest.isCollapsed ?? false,
        board: { connect: { id: boardId } },
      },
    });
  }

  async findColumnsByBoardId(boardId: string): Promise<BoardColumn[]> {
    return prisma.boardColumn.findMany({
      where: { boardId },
      orderBy: { position: 'asc' },
    });
  }

  async findColumnById(id: string): Promise<BoardColumn | null> {
    return prisma.boardColumn.findUnique({ where: { id } });
  }

  async updateColumn(
    id: string,
    data: {
      name?: string;
      color?: string;
      wip?: number;
      position?: number;
      taskStatus?: string;
      isDone?: boolean;
      isCollapsed?: boolean;
    }
  ): Promise<BoardColumn> {
    return prisma.boardColumn.update({ where: { id }, data });
  }

  async deleteColumn(id: string): Promise<BoardColumn> {
    return prisma.boardColumn.delete({ where: { id } });
  }

  async reorderColumns(updates: Array<{ id: string; position: number }>): Promise<void> {
    await prisma.$transaction(
      updates.map((u) =>
        prisma.boardColumn.update({
          where: { id: u.id },
          data: { position: u.position },
        })
      )
    );
  }

  // ─── Swimlane CRUD ──────────────────────────────────────────────────────────

  async createSwimlane(data: {
    boardId: string;
    name: string;
    color?: string;
    position: number;
    query?: Record<string, unknown>;
    isCollapsed?: boolean;
  }): Promise<Swimlane> {
    const { boardId, ...rest } = data;
    return prisma.swimlane.create({
      data: {
        ...rest,
        isCollapsed: rest.isCollapsed ?? false,
        query: rest.query as Prisma.InputJsonValue | undefined,
        board: { connect: { id: boardId } },
      },
    });
  }

  async findSwimlanesByBoardId(boardId: string): Promise<Swimlane[]> {
    return prisma.swimlane.findMany({
      where: { boardId },
      orderBy: { position: 'asc' },
    });
  }

  async findSwimlaneById(id: string): Promise<Swimlane | null> {
    return prisma.swimlane.findUnique({ where: { id } });
  }

  async updateSwimlane(
    id: string,
    data: {
      name?: string;
      color?: string;
      position?: number;
      query?: Record<string, unknown>;
      isCollapsed?: boolean;
    }
  ): Promise<Swimlane> {
    return prisma.swimlane.update({
      where: { id },
      data: {
        ...data,
        query: data.query as Prisma.InputJsonValue | undefined,
      },
    });
  }

  async deleteSwimlane(id: string): Promise<Swimlane> {
    return prisma.swimlane.delete({ where: { id } });
  }

  // ─── Filter CRUD ────────────────────────────────────────────────────────────

  async createFilter(data: {
    boardId: string;
    userId: string;
    name: string;
    filters: Record<string, unknown>;
    isDefault?: boolean;
    isShared?: boolean;
  }): Promise<BoardFilter> {
    return prisma.boardFilter.create({
      data: {
        ...data,
        isDefault: data.isDefault ?? false,
        isShared: data.isShared ?? false,
        filters: data.filters as Prisma.InputJsonValue,
      },
    });
  }

  async findFiltersByBoardAndUser(boardId: string, userId: string): Promise<BoardFilter[]> {
    return prisma.boardFilter.findMany({
      where: {
        boardId,
        OR: [{ userId }, { isShared: true }],
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findFilterById(id: string): Promise<BoardFilter | null> {
    return prisma.boardFilter.findUnique({ where: { id } });
  }

  async deleteFilter(id: string): Promise<BoardFilter> {
    return prisma.boardFilter.delete({ where: { id } });
  }
}

export const boardRepository = new BoardRepository();
