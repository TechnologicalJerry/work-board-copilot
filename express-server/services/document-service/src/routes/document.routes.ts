import { Router } from 'express';
import { authenticate } from '@boardpilot/middlewares';
import { validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import {
  createDocumentSchema,
  updateDocumentSchema,
  addCollaboratorSchema,
  restoreVersionSchema,
  listDocumentsQuerySchema,
  createFromTemplateSchema,
  idParamSchema,
  collaboratorParamSchema,
} from '../validators/document.validators';
import * as DocumentController from '../controllers/DocumentController';

const router = Router();

router.use(authenticate);

// Document tree
router.get('/tree', DocumentController.getTree);

// Templates
router.get('/templates', DocumentController.listTemplates);
router.post('/templates/:templateId/use', validateBody(createFromTemplateSchema), DocumentController.createFromTemplate);

// CRUD
router.get('/', validateQuery(listDocumentsQuerySchema), DocumentController.listDocuments);
router.post('/', validateBody(createDocumentSchema), DocumentController.createDocument);
router.get('/:id', validateParams(idParamSchema), DocumentController.getDocument);
router.patch('/:id', validateParams(idParamSchema), validateBody(updateDocumentSchema), DocumentController.updateDocument);
router.delete('/:id', validateParams(idParamSchema), DocumentController.deleteDocument);

// Status transitions
router.patch('/:id/publish', validateParams(idParamSchema), DocumentController.publishDocument);
router.patch('/:id/archive', validateParams(idParamSchema), DocumentController.archiveDocument);

// Versioning
router.post('/:id/restore', validateParams(idParamSchema), validateBody(restoreVersionSchema), DocumentController.restoreVersion);

// Collaborators
router.post('/:id/collaborators', validateParams(idParamSchema), validateBody(addCollaboratorSchema), DocumentController.addCollaborator);
router.delete('/:id/collaborators/:userId', DocumentController.removeCollaborator);

export default router;
