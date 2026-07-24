import { Router } from 'express';
import { authenticate, validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import { TimeEntryController } from '../controllers/TimeEntryController';
import { TimesheetController } from '../controllers/TimesheetController';
import { ReportController } from '../controllers/ReportController';
import {
  createTimeEntrySchema,
  updateTimeEntrySchema,
  createTimesheetSchema,
  listTimeEntriesSchema,
  listTimesheetsSchema,
  idParamSchema,
  userIdParamSchema,
  projectIdParamSchema,
  reportQuerySchema,
} from '../validators/time.validators';

const router = Router();

// ── Time Entry routes ──────────────────────────────────────────────────────────

/** POST /time/entries  – start a new timer / create a manual entry */
router.post(
  '/time/entries',
  authenticate,
  validateBody(createTimeEntrySchema),
  TimeEntryController.create,
);

/** GET /time/entries  – list entries with optional filters */
router.get(
  '/time/entries',
  authenticate,
  validateQuery(listTimeEntriesSchema),
  TimeEntryController.list,
);

/** GET /time/active  – get the currently running timer for the authenticated user */
router.get('/time/active', authenticate, TimeEntryController.getActive);

/** GET /time/entries/:id  – get a single time entry by id */
router.get(
  '/time/entries/:id',
  authenticate,
  validateParams(idParamSchema),
  TimeEntryController.getById,
);

/** PUT /time/entries/:id  – update a stopped time entry */
router.put(
  '/time/entries/:id',
  authenticate,
  validateParams(idParamSchema),
  validateBody(updateTimeEntrySchema),
  TimeEntryController.update,
);

/** DELETE /time/entries/:id  – soft-delete a time entry (204) */
router.delete(
  '/time/entries/:id',
  authenticate,
  validateParams(idParamSchema),
  TimeEntryController.delete,
);

/** POST /time/entries/:id/stop  – stop a running timer */
router.post(
  '/time/entries/:id/stop',
  authenticate,
  validateParams(idParamSchema),
  TimeEntryController.stop,
);

// ── Timesheet routes ───────────────────────────────────────────────────────────

/** GET /time/timesheets  – list timesheets for the authenticated user */
router.get(
  '/time/timesheets',
  authenticate,
  validateQuery(listTimesheetsSchema),
  TimesheetController.list,
);

/** POST /time/timesheets  – create a new timesheet */
router.post(
  '/time/timesheets',
  authenticate,
  validateBody(createTimesheetSchema),
  TimesheetController.create,
);

/** GET /time/timesheets/:id  – get a timesheet by id */
router.get(
  '/time/timesheets/:id',
  authenticate,
  validateParams(idParamSchema),
  TimesheetController.getById,
);

/** POST /time/timesheets/:id/submit  – submit a draft timesheet for approval */
router.post(
  '/time/timesheets/:id/submit',
  authenticate,
  validateParams(idParamSchema),
  TimesheetController.submit,
);

/** POST /time/timesheets/:id/approve  – approve a submitted timesheet */
router.post(
  '/time/timesheets/:id/approve',
  authenticate,
  validateParams(idParamSchema),
  TimesheetController.approve,
);

/** POST /time/timesheets/:id/reject  – reject a submitted timesheet */
router.post(
  '/time/timesheets/:id/reject',
  authenticate,
  validateParams(idParamSchema),
  TimesheetController.reject,
);

// ── Report routes ──────────────────────────────────────────────────────────────

/** GET /time/reports/user/:userId  – aggregated time report for a user */
router.get(
  '/time/reports/user/:userId',
  authenticate,
  validateParams(userIdParamSchema),
  validateQuery(reportQuerySchema),
  ReportController.getUserReport,
);

/** GET /time/reports/project/:projectId  – aggregated time report for a project */
router.get(
  '/time/reports/project/:projectId',
  authenticate,
  validateParams(projectIdParamSchema),
  validateQuery(reportQuerySchema),
  ReportController.getProjectReport,
);

export { router as timeRouter };
