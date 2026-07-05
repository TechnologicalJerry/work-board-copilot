import { Request, Response, NextFunction } from 'express';
import * as DocumentService from '../services/DocumentService';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { BadRequestError } from '@boardpilot/errors';

// Organization-scoped document operations require an organizationId on the
// authenticated user; the JWT payload marks it optional, so guard it here.
function requireOrganizationId(organizationId: string | undefined): string {
  if (!organizationId) {
    throw new BadRequestError('An organization context is required for this operation.');
  }
  return organizationId;
}

export async function createDocument(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const doc = await DocumentService.create(req.body, req.user!.id);
    res.status(201).json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getDocument(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const doc = await DocumentService.findById(req.params.id);
    res.json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function listDocuments(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { workspaceId, projectId, authorId, page, limit } = req.query as any;
    const result = await DocumentService.list(
      { workspaceId, projectId, authorId, organizationId: requireOrganizationId(req.user!.organizationId) },
      Number(page),
      Number(limit)
    );
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function updateDocument(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const doc = await DocumentService.update(req.params.id, req.user!.id, req.body);
    res.json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function publishDocument(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const doc = await DocumentService.publish(req.params.id, req.user!.id);
    res.json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function archiveDocument(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const doc = await DocumentService.archive(req.params.id, req.user!.id);
    res.json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function deleteDocument(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const doc = await DocumentService.softDelete(req.params.id, req.user!.id);
    res.json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function restoreVersion(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { version } = req.body;
    const doc = await DocumentService.restoreVersion(req.params.id, version, req.user!.id);
    res.json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function addCollaborator(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const doc = await DocumentService.addCollaborator(req.params.id, req.body.userId, req.body.permission);
    res.json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function removeCollaborator(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const doc = await DocumentService.removeCollaborator(req.params.id, req.params.userId);
    res.json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getTree(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { workspaceId } = req.query as any;
    const tree = await DocumentService.getTree(workspaceId);
    res.json(successResponse(tree, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function listTemplates(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const templates = await DocumentService.listTemplates(requireOrganizationId(req.user!.organizationId));
    res.json(successResponse(templates, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function createFromTemplate(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const doc = await DocumentService.createFromTemplate(req.params.templateId, req.body, req.user!.id);
    res.status(201).json(successResponse(doc, req.context.requestId));
  } catch (err) {
    next(err);
  }
}
