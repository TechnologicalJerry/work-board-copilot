import type { Request, Response, NextFunction } from 'express';
import { BillingService } from '../../services/BillingService';
import { StripeService } from '../../infrastructure/stripe/StripeService';
import { successResponse, paginatedResponse, buildPaginatedResult } from '@boardpilot/common';
import { BadRequestError } from '@boardpilot/errors';
import logger from '@boardpilot/logger';
import type { PlanType } from '../../generated/prisma-client';

export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly stripeService: StripeService,
  ) {}

  createCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { organizationId, email, name } = req.body as {
        organizationId: string;
        email: string;
        name: string;
      };
      const customer = await this.billingService.createCustomer(organizationId, email, name);
      res.status(201).json(successResponse(customer, 'Billing customer created'));
    } catch (err) {
      next(err);
    }
  };

  getCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { orgId } = req.params;
      const data = await this.billingService.getCustomerByOrg(orgId);
      res.json(successResponse(data));
    } catch (err) {
      next(err);
    }
  };

  createSubscription = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { organizationId, plan, interval, trialDays } = req.body as {
        organizationId: string;
        plan: PlanType;
        interval: 'monthly' | 'yearly';
        trialDays?: number;
      };
      const sub = await this.billingService.createSubscription(organizationId, plan, interval, trialDays);
      res.status(201).json(successResponse(sub, 'Subscription created'));
    } catch (err) {
      next(err);
    }
  };

  cancelSubscription = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { orgId } = req.params;
      const sub = await this.billingService.cancelSubscription(orgId);
      res.json(successResponse(sub, 'Subscription will be cancelled at period end'));
    } catch (err) {
      next(err);
    }
  };

  resumeSubscription = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { orgId } = req.params;
      const sub = await this.billingService.resumeSubscription(orgId);
      res.json(successResponse(sub, 'Subscription resumed'));
    } catch (err) {
      next(err);
    }
  };

  getPlans = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const plans = await this.billingService.getPlans();
      res.json(successResponse(plans));
    } catch (err) {
      next(err);
    }
  };

  getInvoices = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { orgId } = req.params;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;
      const result = await this.billingService.getInvoices(orgId, page, limit);
      res.json(paginatedResponse(
        buildPaginatedResult(result.data, result.total, { page: result.page, limit: result.limit })
      ));
    } catch (err) {
      next(err);
    }
  };

  getBillingPortal = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { orgId } = req.params;
      const { returnUrl } = req.body as { returnUrl: string };
      const session = await this.billingService.getBillingPortal(orgId, returnUrl);
      res.json(successResponse({ url: session.url }));
    } catch (err) {
      next(err);
    }
  };

  getPaymentMethods = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { orgId } = req.params;
      const methods = await this.billingService.getPaymentMethods(orgId);
      res.json(successResponse(methods));
    } catch (err) {
      next(err);
    }
  };

  attachPaymentMethod = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { orgId } = req.params;
      const { paymentMethodId } = req.body as { paymentMethodId: string };
      const pm = await this.billingService.attachPaymentMethod(orgId, paymentMethodId);
      res.status(201).json(successResponse(pm, 'Payment method attached'));
    } catch (err) {
      next(err);
    }
  };

  validateCoupon = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { code } = req.query as { code: string };
      if (!code) throw new BadRequestError('Coupon code is required');
      const coupon = await this.billingService.validateCoupon(code);
      res.json(successResponse({ valid: coupon.valid, percentOff: coupon.percent_off, amountOff: coupon.amount_off }));
    } catch (err) {
      next(err);
    }
  };

  handleStripeWebhook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const sig = req.headers['stripe-signature'] as string;
      if (!sig) throw new BadRequestError('Missing stripe-signature header');

      const event = this.stripeService.constructWebhookEvent(req.body as Buffer, sig);
      await this.billingService.handleWebhookEvent(event);
      res.json({ received: true });
    } catch (err) {
      logger.error({ err }, 'Stripe webhook error');
      next(err);
    }
  };
}
