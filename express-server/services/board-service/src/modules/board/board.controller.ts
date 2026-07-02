import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { BoardService } from './board.service';
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

export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // ─── Board Handlers ──────────────────────────────────────────────────────────

  createBoard = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const body = req.body as CreateBoardInput;
      const userId = req.user!.id;
      const { organizationId, workspaceId } = req.user!;
      const { correlationId, requestId } = req.context;

      const board = await this.boardService.createBoard(
        body,
        userId,
        organizationId,
        workspaceId,
        correlationId
      );

      res.status(201).json(successResponse(board, requestId));
    } catch (err) {
      next(err);
    }
  };

  listBoards = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.query as unknown as ListBoardsInput;
      const userId = req.user!.id;
      const { requestId } = req.context;

      const result = await this.boardService.getBoards(query, userId);
      res.status(200).json(paginatedResponse(result, requestId));
    } catch (err) {
      next(err);
    }
  };

  getBoardById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const { requestId } = req.context;

      const board = await this.boardService.getBoardById(boardId);
      res.status(200).json(successResponse(board, requestId));
    } catch (err) {
      next(err);
    }
  };

  updateBoard = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const body = req.body as UpdateBoardInput;
      const userId = req.user!.id;
      const { organizationId, workspaceId } = req.user!;
      const { correlationId, requestId } = req.context;

      const board = await this.boardService.updateBoard(
        boardId,
        body,
        userId,
        organizationId,
        workspaceId,
        correlationId
      );

      res.status(200).json(successResponse(board, requestId));
    } catch (err) {
      next(err);
    }
  };

  deleteBoard = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const userId = req.user!.id;
      const { organizationId, workspaceId } = req.user!;
      const { correlationId } = req.context;

      await this.boardService.deleteBoard(boardId, userId, organizationId, workspaceId, correlationId);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  // ─── Column Handlers ─────────────────────────────────────────────────────────

  getColumns = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const { requestId } = req.context;

      const columns = await this.boardService.getColumns(boardId);
      res.status(200).json(successResponse(columns, requestId));
    } catch (err) {
      next(err);
    }
  };

  addColumn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const body = req.body as CreateColumnInput;
      const userId = req.user!.id;
      const { organizationId, workspaceId } = req.user!;
      const { correlationId, requestId } = req.context;

      const column = await this.boardService.addColumn(
        boardId,
        body,
        userId,
        organizationId,
        workspaceId,
        correlationId
      );

      res.status(201).json(successResponse(column, requestId));
    } catch (err) {
      next(err);
    }
  };

  updateColumn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId, columnId } = req.params;
      const body = req.body as UpdateColumnInput;
      const userId = req.user!.id;
      const { organizationId, workspaceId } = req.user!;
      const { correlationId, requestId } = req.context;

      const column = await this.boardService.updateColumn(
        boardId,
        columnId,
        body,
        userId,
        organizationId,
        workspaceId,
        correlationId
      );

      res.status(200).json(successResponse(column, requestId));
    } catch (err) {
      next(err);
    }
  };

  deleteColumn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId, columnId } = req.params;
      const userId = req.user!.id;
      const { organizationId, workspaceId } = req.user!;
      const { correlationId } = req.context;

      await this.boardService.deleteColumn(
        boardId,
        columnId,
        userId,
        organizationId,
        workspaceId,
        correlationId
      );

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  reorderColumns = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const body = req.body as ReorderColumnsInput;
      const userId = req.user!.id;
      const { requestId } = req.context;

      const columns = await this.boardService.reorderColumns(boardId, body, userId);
      res.status(200).json(successResponse(columns, requestId));
    } catch (err) {
      next(err);
    }
  };

  // ─── Swimlane Handlers ───────────────────────────────────────────────────────

  getSwimlanes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const { requestId } = req.context;

      const swimlanes = await this.boardService.getSwimlanes(boardId);
      res.status(200).json(successResponse(swimlanes, requestId));
    } catch (err) {
      next(err);
    }
  };

  addSwimlane = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const body = req.body as CreateSwimlaneInput;
      const userId = req.user!.id;
      const { organizationId, workspaceId } = req.user!;
      const { correlationId, requestId } = req.context;

      const swimlane = await this.boardService.addSwimlane(
        boardId,
        body,
        userId,
        organizationId,
        workspaceId,
        correlationId
      );

      res.status(201).json(successResponse(swimlane, requestId));
    } catch (err) {
      next(err);
    }
  };

  updateSwimlane = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId, swimlaneId } = req.params;
      const body = req.body as UpdateSwimlaneInput;
      const userId = req.user!.id;
      const { organizationId, workspaceId } = req.user!;
      const { correlationId, requestId } = req.context;

      const swimlane = await this.boardService.updateSwimlane(
        boardId,
        swimlaneId,
        body,
        userId,
        organizationId,
        workspaceId,
        correlationId
      );

      res.status(200).json(successResponse(swimlane, requestId));
    } catch (err) {
      next(err);
    }
  };

  deleteSwimlane = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId, swimlaneId } = req.params;
      const userId = req.user!.id;

      await this.boardService.deleteSwimlane(boardId, swimlaneId, userId);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  // ─── Filter Handlers ─────────────────────────────────────────────────────────

  getFilters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const userId = req.user!.id;
      const { requestId } = req.context;

      const filters = await this.boardService.getFilters(boardId, userId);
      res.status(200).json(successResponse(filters, requestId));
    } catch (err) {
      next(err);
    }
  };

  saveFilter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId } = req.params;
      const body = req.body as CreateFilterInput;
      const userId = req.user!.id;
      const { requestId } = req.context;

      const filter = await this.boardService.saveFilter(boardId, body, userId);
      res.status(201).json(successResponse(filter, requestId));
    } catch (err) {
      next(err);
    }
  };

  deleteFilter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { boardId, filterId } = req.params;
      const userId = req.user!.id;

      await this.boardService.deleteFilter(boardId, filterId, userId);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}
