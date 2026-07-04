import { BillingRepository } from '../infrastructure/repositories/BillingRepository';
import { StripeService } from '../infrastructure/stripe/StripeService';
import { BillingEventPublisher } from '../infrastructure/events/BillingEventPublisher';
import { NotFoundError, BadRequestError, ConflictError } from '@boardpilot/errors';
import type Stripe from 'stripe';
import type { PlanType } from '../generated/prisma-client';
import logger from '@boardpilot/logger';

const PLAN_PRICE_IDS: Record<string, { monthly: string; yearly: string }> = {
  STARTER: {
    monthly: process.env.STRIPE_PRICE_STARTER_MONTHLY ?? 'price_starter_monthly',
    yearly: process.env.STRIPE_PRICE_STARTER_YEARLY ?? 'price_starter_yearly',
  },
  PROFESSIONAL: {
    monthly: process.env.STRIPE_PRICE_PRO_MONTHLY ?? 'price_pro_monthly',
    yearly: process.env.STRIPE_PRICE_PRO_YEARLY ?? 'price_pro_yearly',
  },
  ENTERPRISE: {
    monthly: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY ?? 'price_enterprise_monthly',
    yearly: process.env.STRIPE_PRICE_ENTERPRISE_YEARLY ?? 'price_enterprise_yearly',
  },
};

function mapStripeStatus(status: string): string {
  const map: Record<string, string> = {
    active: 'ACTIVE',
    trialing: 'TRIALING',
    past_due: 'PAST_DUE',
    canceled: 'CANCELLED',
    incomplete: 'INCOMPLETE',
    incomplete_expired: 'INCOMPLETE_EXPIRED',
    paused: 'PAUSED',
  };
  return map[status] ?? 'INCOMPLETE';
}

export class BillingService {
  constructor(
    private readonly repo: BillingRepository,
    private readonly stripe: StripeService,
    private readonly publisher: BillingEventPublisher,
  ) {}

  async createCustomer(organizationId: string, email: string, name: string) {
    const existing = await this.repo.findCustomerByOrgId(organizationId);
    if (existing) return existing;

    const stripeCustomer = await this.stripe.createCustomer(email, name, { organizationId });
    return this.repo.createCustomer({
      organizationId,
      stripeCustomerId: stripeCustomer.id,
      email,
      name,
    });
  }

  async getCustomerByOrg(organizationId: string) {
    const customer = await this.repo.findCustomerByOrgId(organizationId);
    if (!customer) throw new NotFoundError('Billing customer not found');
    const subscription = await this.repo.findSubscriptionByCustomerId(customer.id);
    return { ...customer, subscription };
  }

  async createSubscription(
    organizationId: string,
    plan: PlanType,
    interval: 'monthly' | 'yearly',
    trialDays?: number,
  ) {
    if (plan === 'FREE') throw new BadRequestError('FREE plan does not require a subscription');

    const customer = await this.repo.findCustomerByOrgId(organizationId);
    if (!customer) throw new NotFoundError('Billing customer not found. Create customer first.');

    const existing = await this.repo.findSubscriptionByCustomerId(customer.id);
    if (existing) throw new ConflictError('Active subscription already exists');

    const priceId = PLAN_PRICE_IDS[plan]?.[interval];
    if (!priceId) throw new BadRequestError(`Invalid plan or interval: ${plan}/${interval}`);

    const stripeSub = await this.stripe.createSubscription(customer.stripeCustomerId, priceId, trialDays);
    const sub = await this.repo.createSubscription({
      customerId: customer.id,
      stripeSubscriptionId: stripeSub.id,
      stripePriceId: priceId,
      plan,
      status: mapStripeStatus(stripeSub.status),
      currentPeriodStart: new Date(stripeSub.current_period_start * 1000),
      currentPeriodEnd: new Date(stripeSub.current_period_end * 1000),
      trialStart: stripeSub.trial_start ? new Date(stripeSub.trial_start * 1000) : undefined,
      trialEnd: stripeSub.trial_end ? new Date(stripeSub.trial_end * 1000) : undefined,
    });

    const limits = await this.repo.findPlanLimit(plan);
    await this.publisher.publishSubscriptionUpdated(organizationId, plan, sub.status, limits ?? {});
    return sub;
  }

  async cancelSubscription(organizationId: string) {
    const customer = await this.repo.findCustomerByOrgId(organizationId);
    if (!customer) throw new NotFoundError('Billing customer not found');

    const sub = await this.repo.findSubscriptionByCustomerId(customer.id);
    if (!sub) throw new NotFoundError('No active subscription found');

    await this.stripe.cancelSubscription(sub.stripeSubscriptionId, true);
    const updated = await this.repo.updateSubscription(sub.id, { cancelAtPeriodEnd: true });
    return updated;
  }

  async resumeSubscription(organizationId: string) {
    const customer = await this.repo.findCustomerByOrgId(organizationId);
    if (!customer) throw new NotFoundError('Billing customer not found');

    const sub = await this.repo.findSubscriptionByCustomerId(customer.id);
    if (!sub) throw new NotFoundError('No subscription found');
    if (!sub.cancelAtPeriodEnd) throw new BadRequestError('Subscription is not set to cancel');

    await this.stripe.resumeSubscription(sub.stripeSubscriptionId);
    return this.repo.updateSubscription(sub.id, { cancelAtPeriodEnd: false });
  }

  async handleWebhookEvent(event: Stripe.Event): Promise<void> {
    logger.info({ type: event.type }, 'Processing Stripe webhook');

    switch (event.type) {
      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription;
        const plan = (sub.metadata.plan as PlanType) ?? 'STARTER';
        const dbSub = await this.repo.findSubscriptionByStripeId(sub.id);
        if (!dbSub) return;

        const updated = await this.repo.updateSubscriptionByStripeId(sub.id, {
          status: mapStripeStatus(sub.status) as Parameters<typeof this.repo.updateSubscriptionByStripeId>[1]['status'],
          plan,
          currentPeriodStart: new Date(sub.current_period_start * 1000),
          currentPeriodEnd: new Date(sub.current_period_end * 1000),
          cancelAtPeriodEnd: sub.cancel_at_period_end,
          cancelledAt: sub.canceled_at ? new Date(sub.canceled_at * 1000) : null,
        });

        const customer = await this.repo.findCustomerByStripeId(sub.customer as string);
        if (customer) {
          const limits = await this.repo.findPlanLimit(plan);
          await this.publisher.publishSubscriptionUpdated(
            customer.organizationId, plan, updated.status, limits ?? {},
          );
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        const customer = await this.repo.findCustomerByStripeId(invoice.customer as string);
        if (!customer) return;

        await this.repo.upsertInvoice(invoice.id, {
          customerId: customer.id,
          amount: invoice.amount_paid,
          currency: invoice.currency,
          status: 'PAID',
          description: invoice.description ?? undefined,
          pdfUrl: invoice.invoice_pdf ?? undefined,
          hostedUrl: invoice.hosted_invoice_url ?? undefined,
          periodStart: invoice.period_start ? new Date(invoice.period_start * 1000) : undefined,
          periodEnd: invoice.period_end ? new Date(invoice.period_end * 1000) : undefined,
          paidAt: invoice.status_transitions.paid_at ? new Date(invoice.status_transitions.paid_at * 1000) : undefined,
        });
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const customer = await this.repo.findCustomerByStripeId(invoice.customer as string);
        if (!customer) return;

        await this.repo.upsertInvoice(invoice.id, {
          customerId: customer.id,
          amount: invoice.amount_due,
          currency: invoice.currency,
          status: 'OPEN',
          description: invoice.description ?? undefined,
        });

        await this.publisher.publishPaymentFailed(customer.organizationId, invoice.id, invoice.amount_due);
        break;
      }

      default:
        logger.debug({ type: event.type }, 'Unhandled Stripe event');
    }
  }

  async getPlans() {
    return this.repo.findAllPlanLimits();
  }

  async validateCoupon(code: string) {
    return this.stripe.validateCoupon(code);
  }

  async getBillingPortal(organizationId: string, returnUrl: string) {
    const customer = await this.repo.findCustomerByOrgId(organizationId);
    if (!customer) throw new NotFoundError('Billing customer not found');
    return this.stripe.createBillingPortalSession(customer.stripeCustomerId, returnUrl);
  }

  async getInvoices(organizationId: string, page = 1, limit = 20) {
    const customer = await this.repo.findCustomerByOrgId(organizationId);
    if (!customer) throw new NotFoundError('Billing customer not found');
    return this.repo.findInvoicesByCustomerId(customer.id, page, limit);
  }

  async getPaymentMethods(organizationId: string) {
    const customer = await this.repo.findCustomerByOrgId(organizationId);
    if (!customer) throw new NotFoundError('Billing customer not found');
    return this.repo.findPaymentMethodsByCustomerId(customer.id);
  }

  async attachPaymentMethod(organizationId: string, paymentMethodId: string) {
    const customer = await this.repo.findCustomerByOrgId(organizationId);
    if (!customer) throw new NotFoundError('Billing customer not found');

    await this.stripe.attachPaymentMethod(customer.stripeCustomerId, paymentMethodId);
    return this.repo.createPaymentMethod({
      customerId: customer.id,
      stripePaymentMethodId: paymentMethodId,
      type: 'card',
      isDefault: true,
    });
  }
}
