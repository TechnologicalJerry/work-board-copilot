import { z } from 'zod';
import { paginationSchema, uuidSchema, colorSchema } from '@boardpilot/validation';

export const BoardTypeEnum = z.enum(['KANBAN', 'SCRUM', 'TIMELINE', 'CALENDAR', 'TABLE']);

export const createBoardSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name must not exceed 255 characters'),
  projectId: uuidSchema,
  type: BoardTypeEnum.optional().default('KANBAN'),
  description: z.string().max(2000).optional(),
  isDefault: z.boolean().optional().default(false),
  settings: z.record(z.unknown()).optional().default({}),
  columns: z
    .array(
      z.object({
        name: z.string().min(1).max(255),
        color: colorSchema.optional(),
        wip: z.number().int().positive().optional(),
        position: z.number().int().min(0),
        taskStatus: z.string().min(1),
        isDone: z.boolean().optional().default(false),
        isCollapsed: z.boolean().optional().default(false),
      })
    )
    .optional(),
});

export const updateBoardSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().max(2000).optional(),
  type: BoardTypeEnum.optional(),
  isDefault: z.boolean().optional(),
  settings: z.record(z.unknown()).optional(),
});

export const createColumnSchema = z.object({
  name: z.string().min(1, 'Column name is required').max(255),
  color: colorSchema.optional(),
  wip: z.number().int().positive().optional(),
  position: z.number().int().min(0),
  taskStatus: z.string().min(1, 'taskStatus is required'),
  isDone: z.boolean().optional().default(false),
  isCollapsed: z.boolean().optional().default(false),
});

export const updateColumnSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  color: colorSchema.optional(),
  wip: z.number().int().positive().optional(),
  position: z.number().int().min(0).optional(),
  taskStatus: z.string().min(1).optional(),
  isDone: z.boolean().optional(),
  isCollapsed: z.boolean().optional(),
});

export const reorderColumnsSchema = z.array(
  z.object({
    id: uuidSchema,
    position: z.number().int().min(0),
  })
);

export const createSwimlaneSchema = z.object({
  name: z.string().min(1, 'Swimlane name is required').max(255),
  color: colorSchema.optional(),
  position: z.number().int().min(0),
  query: z.record(z.unknown()).optional(),
  isCollapsed: z.boolean().optional().default(false),
});

export const updateSwimlaneSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  color: colorSchema.optional(),
  position: z.number().int().min(0).optional(),
  query: z.record(z.unknown()).optional(),
  isCollapsed: z.boolean().optional(),
});

export const createFilterSchema = z.object({
  name: z.string().min(1, 'Filter name is required').max(255),
  filters: z.record(z.unknown()),
  isDefault: z.boolean().optional().default(false),
  isShared: z.boolean().optional().default(false),
});

export const listBoardsSchema = paginationSchema.extend({
  projectId: uuidSchema,
});

export const boardIdParamSchema = z.object({
  boardId: uuidSchema,
});

export const boardColumnParamSchema = z.object({
  boardId: uuidSchema,
  columnId: uuidSchema,
});

export const boardSwimlaneParamSchema = z.object({
  boardId: uuidSchema,
  swimlaneId: uuidSchema,
});

export const boardFilterParamSchema = z.object({
  boardId: uuidSchema,
  filterId: uuidSchema,
});

export type CreateBoardInput = z.infer<typeof createBoardSchema>;
export type UpdateBoardInput = z.infer<typeof updateBoardSchema>;
export type CreateColumnInput = z.infer<typeof createColumnSchema>;
export type UpdateColumnInput = z.infer<typeof updateColumnSchema>;
export type ReorderColumnsInput = z.infer<typeof reorderColumnsSchema>;
export type CreateSwimlaneInput = z.infer<typeof createSwimlaneSchema>;
export type UpdateSwimlaneInput = z.infer<typeof updateSwimlaneSchema>;
export type CreateFilterInput = z.infer<typeof createFilterSchema>;
export type ListBoardsInput = z.infer<typeof listBoardsSchema>;
