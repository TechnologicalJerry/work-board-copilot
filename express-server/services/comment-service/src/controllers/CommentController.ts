import { Request, Response, NextFunction } from 'express';
import * as CommentService from '../services/CommentService';
import { successResponse, paginatedResponse } from '@boardpilot/common';

export async function createComment(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const authorId = req.user!.id;
    const comment = await CommentService.create(req.body, authorId);
    res.status(201).json(successResponse(comment, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function updateComment(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const comment = await CommentService.update(req.params.id, req.user!.id, req.body);
    res.json(successResponse(comment, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function deleteComment(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const comment = await CommentService.softDelete(req.params.id, req.user!.id);
    res.json(successResponse(comment, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function addReaction(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const comment = await CommentService.addReaction(req.params.id, req.user!.id, req.body.emoji);
    res.json(successResponse(comment, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function resolveComment(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const comment = await CommentService.resolve(req.params.id, req.user!.id);
    res.json(successResponse(comment, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function pinComment(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const comment = await CommentService.pin(req.params.id);
    res.json(successResponse(comment, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function listComments(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { entityId, entityType, page, limit } = req.query as any;
    const result = await CommentService.listForEntity(entityId, entityType, Number(page), Number(limit));
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function listReplies(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { page = 1, limit = 20 } = req.query as any;
    const result = await CommentService.listReplies(req.params.id, Number(page), Number(limit));
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}
