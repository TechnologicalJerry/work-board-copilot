import { Router } from 'express';
import { BillingController } from '../controllers/BillingController';
import { BillingService } from '../../services/BillingService';
import { BillingRepository } from '../../infrastructure/repositories/BillingRepository';
import { StripeService } from '../../infrastructure/stripe/StripeService';
import { BillingEventPublisher } from '../../infrastructure/events/BillingEventPublisher';
import { authenticate, validateBody, validateQuery } from '@boardpilot/middlewares';
import {
  createCustomerSchema,
  createSubscriptionSchema,
  attachPaymentMethodSchema,
  billingPortalSchema,
  validateCouponSchema,
} from '../validators/billing.validators';

const repo = new BillingRepository();
const stripe = new StripeService();
const publisher = new BillingEventPublisher();
const billingService = new BillingService(repo, stripe, publisher);
const controller = new BillingController(billingService, stripe);

const router = Router();

router.get('/plans', controller.getPlans);
router.get('/coupons/validate', authenticate, validateQuery(validateCouponSchema), controller.validateCoupon);

router.post('/customers', authenticate, validateBody(createCustomerSchema), controller.createCustomer);
router.get('/customers/:orgId', authenticate, controller.getCustomer);

router.post('/subscriptions', authenticate, validateBody(createSubscriptionSchema), controller.createSubscription);
router.delete('/subscriptions/:orgId', authenticate, controller.cancelSubscription);
router.post('/subscriptions/:orgId/resume', authenticate, controller.resumeSubscription);

router.get('/invoices/:orgId', authenticate, controller.getInvoices);

router.get('/payment-methods/:orgId', authenticate, controller.getPaymentMethods);
router.post('/payment-methods/:orgId', authenticate, validateBody(attachPaymentMethodSchema), controller.attachPaymentMethod);

router.post('/portal/:orgId', authenticate, validateBody(billingPortalSchema), controller.getBillingPortal);

export { router as billingRouter };
