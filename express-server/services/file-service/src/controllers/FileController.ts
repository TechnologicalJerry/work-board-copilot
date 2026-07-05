import { Request, Response, NextFunction } from 'express';
import * as FileService from '../services/FileService';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { BadRequestError } from '@boardpilot/errors';

export async function uploadFile(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    if (!req.file) {
      throw new BadRequestError('No file provided');
    }

    const dto = {
      organizationId: req.body.organizationId ?? req.user!.organizationId,
      entityId: req.body.entityId,
      entityType: req.body.entityType,
    };

    const file = await FileService.upload(req.file, dto, req.user!.id);
    res.status(201).json(successResponse(file, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getPresignedUploadUrl(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const result = await FileService.getPresignedUploadUrl({
      ...req.body,
      organizationId: req.body.organizationId ?? req.user!.organizationId,
    });
    res.json(successResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getDownloadUrl(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const result = await FileService.getDownloadUrl(req.params.id, req.user!.id);
    res.json(successResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function deleteFile(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await FileService.deleteFile(req.params.id, req.user!.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

export async function getFilesForEntity(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { entityId, entityType } = req.query as { entityId: string; entityType: string };
    const files = await FileService.getForEntity(entityId, entityType);
    res.json(successResponse(files, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function listFiles(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { entityId, entityType, uploadedBy, page, limit } = req.query as any;
    const result = await FileService.list(
      { organizationId: req.user!.organizationId, entityId, entityType, uploadedBy },
      Number(page),
      Number(limit)
    );
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}
