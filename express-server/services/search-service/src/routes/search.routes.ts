import { Router } from 'express';
import { z, ZodSchema } from 'zod';
import { authenticate } from '@boardpilot/middlewares';
import { validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import {
  globalSearchQuerySchema,
  taskSearchQuerySchema,
  suggestQuerySchema,
  createSavedFilterSchema,
  updateSavedFilterSchema,
  paginationQuerySchema,
  idParamSchema,
} from '../validators/search.validators';
import * as SearchController from '../controllers/SearchController';

const router = Router();

router.use(authenticate);

// Search endpoints
router.get('/global', validateQuery(globalSearchQuerySchema), SearchController.globalSearch);
router.get(
  '/tasks',
  validateQuery(taskSearchQuerySchema as unknown as ZodSchema<z.infer<typeof taskSearchQuerySchema>>),
  SearchController.searchTasks
);
router.get('/suggest', validateQuery(suggestQuerySchema), SearchController.suggest);

// Saved filters
router.get('/filters', validateQuery(paginationQuerySchema), SearchController.listSavedFilters);
router.post('/filters', validateBody(createSavedFilterSchema), SearchController.createSavedFilter);
router.patch(
  '/filters/:id',
  validateParams(idParamSchema),
  validateBody(updateSavedFilterSchema),
  SearchController.updateSavedFilter
);
router.delete(
  '/filters/:id',
  validateParams(idParamSchema),
  SearchController.deleteSavedFilter
);

export default router;
