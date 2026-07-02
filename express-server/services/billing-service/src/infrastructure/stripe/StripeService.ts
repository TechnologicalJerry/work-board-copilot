import Stripe from 'stripe';
import { getConfig } from '../../config';

export class StripeService {
  private stripe: Stripe;

  constructor() {
    const config = getConfig();
    this.stripe = new Stripe(config.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });
  }

  async createCustomer(email: string, name: string, metadata: Record<string, string> = {}): Promise<Stripe.Customer> {
    return this.stripe.customers.create({ email, name, metadata });
  }

  async createSubscription(
    customerId: string,
    priceId: string,
    trialDays?: number,
  ): Promise<Stripe.Subscription> {
    return this.stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      ...(trialDays && { trial_period_days: trialDays }),
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
    });
  }

  async updateSubscription(subscriptionId: string, priceId: string): Promise<Stripe.Subscription> {
    const sub = await this.stripe.subscriptions.retrieve(subscriptionId);
    return this.stripe.subscriptions.update(subscriptionId, {
      items: [{ id: sub.items.data[0].id, price: priceId }],
      proration_behavior: 'always_invoice',
    });
  }

  async cancelSubscription(
    subscriptionId: string,
    atPeriodEnd: boolean = true,
  ): Promise<Stripe.Subscription> {
    if (atPeriodEnd) {
      return this.stripe.subscriptions.update(subscriptionId, { cancel_at_period_end: true });
    }
    return this.stripe.subscriptions.cancel(subscriptionId);
  }

  async resumeSubscription(subscriptionId: string): Promise<Stripe.Subscription> {
    return this.stripe.subscriptions.update(subscriptionId, { cancel_at_period_end: false });
  }

  async listInvoices(customerId: string, limit = 10): Promise<Stripe.Invoice[]> {
    const result = await this.stripe.invoices.list({ customer: customerId, limit });
    return result.data;
  }

  async createBillingPortalSession(customerId: string, returnUrl: string): Promise<Stripe.BillingPortal.Session> {
    return this.stripe.billingPortal.sessions.create({ customer: customerId, return_url: returnUrl });
  }

  async listPaymentMethods(customerId: string): Promise<Stripe.PaymentMethod[]> {
    const result = await this.stripe.customers.listPaymentMethods(customerId, { type: 'card' });
    return result.data;
  }

  async attachPaymentMethod(customerId: string, paymentMethodId: string): Promise<Stripe.PaymentMethod> {
    const pm = await this.stripe.paymentMethods.attach(paymentMethodId, { customer: customerId });
    await this.stripe.customers.update(customerId, {
      invoice_settings: { default_payment_method: paymentMethodId },
    });
    return pm;
  }

  async detachPaymentMethod(paymentMethodId: string): Promise<Stripe.PaymentMethod> {
    return this.stripe.paymentMethods.detach(paymentMethodId);
  }

  async validateCoupon(couponId: string): Promise<Stripe.Coupon> {
    return this.stripe.coupons.retrieve(couponId);
  }

  constructWebhookEvent(payload: Buffer, signature: string): Stripe.Event {
    const config = getConfig();
    return this.stripe.webhooks.constructEvent(payload, signature, config.STRIPE_WEBHOOK_SECRET);
  }
}
