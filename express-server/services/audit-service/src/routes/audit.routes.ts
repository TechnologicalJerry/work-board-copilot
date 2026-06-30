import { Router } from 'express';
import { authenticate } from '@boardpilot/middlewares';
import { validateBody, validateQuery } from '@boardpilot/middlewares';
import {
  createAuditLogSchema,
  listAuditLogsQuerySchema,
  entityQuerySchema,
  userAuditQuerySchema,
  statsQuerySchema,
  exportQuerySchema,
} from '../validators/audit.validators';
import * as AuditController from '../controllers/AuditController';

const router = Router();

router.use(authenticate);

// List audit logs
router.get('/', validateQuery(listAuditLogsQuerySchema), AuditController.listAuditLogs);

// Create audit log (internal service usage)
router.post('/', validateBody(createAuditLogSchema), AuditController.createAuditLog);

// Get logs by entity
router.get('/entity', validateQuery(entityQuerySchema), AuditController.getLogsByEntity);

// Get logs by user
router.get('/user', validateQuery(userAuditQuerySchema), AuditController.getLogsByUser);

// Export to CSV
router.get('/export', validateQuery(exportQuerySchema), AuditController.exportCsv);

// Stats
router.get('/stats', validateQuery(statsQuerySchema), AuditController.getStats);

export default router;
