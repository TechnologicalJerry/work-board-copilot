import { Router } from 'express';
import { authenticate } from '@boardpilot/middlewares';
import { validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import {
  burndownQuerySchema,
  velocityQuerySchema,
  workloadQuerySchema,
  cycleTimeQuerySchema,
  dashboardQuerySchema,
  createSavedReportSchema,
  updateSavedReportSchema,
  listReportsQuerySchema,
  idParamSchema,
} from '../validators/report.validators';
import * as ReportController from '../controllers/ReportController';

const router = Router();

router.use(authenticate);

// Analytics endpoints
router.get('/burndown', validateQuery(burndownQuerySchema), ReportController.getBurndown);
router.get('/velocity', validateQuery(velocityQuerySchema), ReportController.getVelocity);
router.get('/workload', validateQuery(workloadQuerySchema), ReportController.getWorkload);
router.get('/cycle-time', validateQuery(cycleTimeQuerySchema), ReportController.getCycleTime);
router.get('/dashboard', validateQuery(dashboardQuerySchema), ReportController.getDashboard);

// Saved reports
router.get('/saved', validateQuery(listReportsQuerySchema), ReportController.listSavedReports);
router.post('/saved', validateBody(createSavedReportSchema), ReportController.createSavedReport);
router.patch('/saved/:id', validateParams(idParamSchema), validateBody(updateSavedReportSchema), ReportController.updateSavedReport);
router.delete('/saved/:id', validateParams(idParamSchema), ReportController.deleteSavedReport);

export default router;
