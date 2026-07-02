import { Router } from 'express';
import { authenticate, validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import { BoardController } from '../modules/board/board.controller';
import { getBoardService } from '../modules/board/board.service';
import {
  createBoardSchema,
  updateBoardSchema,
  createColumnSchema,
  updateColumnSchema,
  reorderColumnsSchema,
  createSwimlaneSchema,
  updateSwimlaneSchema,
  createFilterSchema,
  listBoardsSchema,
  boardIdParamSchema,
  boardColumnParamSchema,
  boardSwimlaneParamSchema,
  boardFilterParamSchema,
} from '../modules/board/board.schema';

const router = Router();

// Instantiate service and controller
const boardService = getBoardService();
const boardController = new BoardController(boardService);

// ─── Board Routes ──────────────────────────────────────────────────────────────

/**
 * @swagger
 * /boards:
 *   post:
 *     summary: Create a new board
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 */
router.post(
  '/boards',
  authenticate,
  validateBody(createBoardSchema),
  boardController.createBoard
);

/**
 * @swagger
 * /boards:
 *   get:
 *     summary: List boards for a project
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 */
router.get(
  '/boards',
  authenticate,
  validateQuery(listBoardsSchema),
  boardController.listBoards
);

/**
 * @swagger
 * /boards/{boardId}:
 *   get:
 *     summary: Get a board by ID with columns and swimlanes
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 */
router.get(
  '/boards/:boardId',
  authenticate,
  validateParams(boardIdParamSchema),
  boardController.getBoardById
);

/**
 * @swagger
 * /boards/{boardId}:
 *   put:
 *     summary: Update a board
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 */
router.put(
  '/boards/:boardId',
  authenticate,
  validateParams(boardIdParamSchema),
  validateBody(updateBoardSchema),
  boardController.updateBoard
);

/**
 * @swagger
 * /boards/{boardId}:
 *   delete:
 *     summary: Delete (soft-delete) a board
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 */
router.delete(
  '/boards/:boardId',
  authenticate,
  validateParams(boardIdParamSchema),
  boardController.deleteBoard
);

// ─── Column Routes ─────────────────────────────────────────────────────────────

/**
 * @swagger
 * /boards/{boardId}/columns:
 *   get:
 *     summary: Get columns for a board
 *     tags: [Columns]
 *     security:
 *       - bearerAuth: []
 */
router.get(
  '/boards/:boardId/columns',
  authenticate,
  validateParams(boardIdParamSchema),
  boardController.getColumns
);

/**
 * @swagger
 * /boards/{boardId}/columns:
 *   post:
 *     summary: Add a column to a board
 *     tags: [Columns]
 *     security:
 *       - bearerAuth: []
 */
router.post(
  '/boards/:boardId/columns',
  authenticate,
  validateParams(boardIdParamSchema),
  validateBody(createColumnSchema),
  boardController.addColumn
);

/**
 * @swagger
 * /boards/{boardId}/columns/reorder:
 *   put:
 *     summary: Reorder columns on a board
 *     tags: [Columns]
 *     security:
 *       - bearerAuth: []
 */
router.put(
  '/boards/:boardId/columns/reorder',
  authenticate,
  validateParams(boardIdParamSchema),
  validateBody(reorderColumnsSchema),
  boardController.reorderColumns
);

/**
 * @swagger
 * /boards/{boardId}/columns/{columnId}:
 *   put:
 *     summary: Update a column
 *     tags: [Columns]
 *     security:
 *       - bearerAuth: []
 */
router.put(
  '/boards/:boardId/columns/:columnId',
  authenticate,
  validateParams(boardColumnParamSchema),
  validateBody(updateColumnSchema),
  boardController.updateColumn
);

/**
 * @swagger
 * /boards/{boardId}/columns/{columnId}:
 *   delete:
 *     summary: Delete a column
 *     tags: [Columns]
 *     security:
 *       - bearerAuth: []
 */
router.delete(
  '/boards/:boardId/columns/:columnId',
  authenticate,
  validateParams(boardColumnParamSchema),
  boardController.deleteColumn
);

// ─── Swimlane Routes ───────────────────────────────────────────────────────────

/**
 * @swagger
 * /boards/{boardId}/swimlanes:
 *   get:
 *     summary: Get swimlanes for a board
 *     tags: [Swimlanes]
 *     security:
 *       - bearerAuth: []
 */
router.get(
  '/boards/:boardId/swimlanes',
  authenticate,
  validateParams(boardIdParamSchema),
  boardController.getSwimlanes
);

/**
 * @swagger
 * /boards/{boardId}/swimlanes:
 *   post:
 *     summary: Add a swimlane to a board
 *     tags: [Swimlanes]
 *     security:
 *       - bearerAuth: []
 */
router.post(
  '/boards/:boardId/swimlanes',
  authenticate,
  validateParams(boardIdParamSchema),
  validateBody(createSwimlaneSchema),
  boardController.addSwimlane
);

/**
 * @swagger
 * /boards/{boardId}/swimlanes/{swimlaneId}:
 *   put:
 *     summary: Update a swimlane
 *     tags: [Swimlanes]
 *     security:
 *       - bearerAuth: []
 */
router.put(
  '/boards/:boardId/swimlanes/:swimlaneId',
  authenticate,
  validateParams(boardSwimlaneParamSchema),
  validateBody(updateSwimlaneSchema),
  boardController.updateSwimlane
);

/**
 * @swagger
 * /boards/{boardId}/swimlanes/{swimlaneId}:
 *   delete:
 *     summary: Delete a swimlane
 *     tags: [Swimlanes]
 *     security:
 *       - bearerAuth: []
 */
router.delete(
  '/boards/:boardId/swimlanes/:swimlaneId',
  authenticate,
  validateParams(boardSwimlaneParamSchema),
  boardController.deleteSwimlane
);

// ─── Filter Routes ─────────────────────────────────────────────────────────────

/**
 * @swagger
 * /boards/{boardId}/filters:
 *   get:
 *     summary: Get saved filters for a board
 *     tags: [Filters]
 *     security:
 *       - bearerAuth: []
 */
router.get(
  '/boards/:boardId/filters',
  authenticate,
  validateParams(boardIdParamSchema),
  boardController.getFilters
);

/**
 * @swagger
 * /boards/{boardId}/filters:
 *   post:
 *     summary: Save a filter for a board
 *     tags: [Filters]
 *     security:
 *       - bearerAuth: []
 */
router.post(
  '/boards/:boardId/filters',
  authenticate,
  validateParams(boardIdParamSchema),
  validateBody(createFilterSchema),
  boardController.saveFilter
);

/**
 * @swagger
 * /boards/{boardId}/filters/{filterId}:
 *   delete:
 *     summary: Delete a saved filter
 *     tags: [Filters]
 *     security:
 *       - bearerAuth: []
 */
router.delete(
  '/boards/:boardId/filters/:filterId',
  authenticate,
  validateParams(boardFilterParamSchema),
  boardController.deleteFilter
);

export { router as boardRouter };
