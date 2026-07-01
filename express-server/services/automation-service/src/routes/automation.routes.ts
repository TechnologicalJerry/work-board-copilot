import { Router } from 'express';
import { AutomationController } from '../controllers/AutomationController';
import { AutomationService } from '../services/AutomationService';
import { authenticate, validateBody, validateQuery } from '@boardpilot/middlewares';
import { createRuleSchema, updateRuleSchema, listRulesSchema, testRuleSchema } from '../validators/automation.validators';

const service = new AutomationService();
const controller = new AutomationController(service);

const router = Router();

router.get('/templates', controller.getTemplates);

router.post('/', authenticate, validateBody(createRuleSchema), controller.create);
router.get('/', authenticate, validateQuery(listRulesSchema), controller.list);
router.get('/:id', authenticate, controller.getById);
router.put('/:id', authenticate, validateBody(updateRuleSchema), controller.update);
router.delete('/:id', authenticate, controller.delete);
router.post('/:id/enable', authenticate, controller.enable);
router.post('/:id/disable', authenticate, controller.disable);
router.post('/:id/test', authenticate, validateBody(testRuleSchema), controller.test);
router.get('/:id/executions', authenticate, controller.getExecutions);

export { router as automationRouter };
