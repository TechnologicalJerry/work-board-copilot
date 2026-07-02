import prisma from '../database/prisma';
import type {
  BillingCustomer,
  Subscription,
  Invoice,
  PaymentMethod,
  PlanLimit,
  PlanType,
} from '@prisma/client';

export class BillingRepository {
  // --- Customer ---
  async findCustomerByOrgId(organizationId: string): Promise<BillingCustomer | null> {
    return prisma.billingCustomer.findUnique({ where: { organizationId } });
  }

  async findCustomerByStripeId(stripeCustomerId: string): Promise<BillingCustomer | null> {
    return prisma.billingCustomer.findUnique({ where: { stripeCustomerId } });
  }

  async createCustomer(data: {
    organizationId: string;
    stripeCustomerId: string;
    email: string;
    name: string;
  }): Promise<BillingCustomer> {
    return prisma.billingCustomer.create({ data });
  }

  async updateCustomer(id: string, data: Partial<BillingCustomer>): Promise<BillingCustomer> {
    return prisma.billingCustomer.update({ where: { id }, data });
  }

  // --- Subscription ---
  async findSubscriptionByCustomerId(customerId: string): Promise<Subscription | null> {
    return prisma.subscription.findFirst({
      where: { customerId, status: { in: ['ACTIVE', 'TRIALING', 'PAST_DUE'] } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findSubscriptionByStripeId(stripeSubscriptionId: string): Promise<Subscription | null> {
    return prisma.subscription.findUnique({ where: { stripeSubscriptionId } });
  }

  async createSubscription(data: {
    customerId: string;
    stripeSubscriptionId: string;
    stripePriceId: string;
    plan: PlanType;
    status: string;
    currentPeriodStart: Date;
    currentPeriodEnd: Date;
    trialStart?: Date;
    trialEnd?: Date;
  }): Promise<Subscription> {
    return prisma.subscription.create({ data: data as Parameters<typeof prisma.subscription.create>[0]['data'] });
  }

  async updateSubscription(id: string, data: Partial<Subscription>): Promise<Subscription> {
    return prisma.subscription.update({ where: { id }, data });
  }

  async updateSubscriptionByStripeId(
    stripeSubscriptionId: string,
    data: Partial<Subscription>,
  ): Promise<Subscription> {
    return prisma.subscription.update({ where: { stripeSubscriptionId }, data });
  }

  // --- Invoice ---
  async findInvoicesByCustomerId(customerId: string, page = 1, limit = 20) {
    const [data, total] = await Promise.all([
      prisma.invoice.findMany({
        where: { customerId },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.invoice.count({ where: { customerId } }),
    ]);
    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async upsertInvoice(stripeInvoiceId: string, data: Omit<Parameters<typeof prisma.invoice.create>[0]['data'], 'stripeInvoiceId'>): Promise<Invoice> {
    return prisma.invoice.upsert({
      where: { stripeInvoiceId },
      update: data,
      create: { ...data, stripeInvoiceId },
    });
  }

  // --- Payment Method ---
  async findPaymentMethodsByCustomerId(customerId: string): Promise<PaymentMethod[]> {
    return prisma.paymentMethod.findMany({ where: { customerId } });
  }

  async findDefaultPaymentMethod(customerId: string): Promise<PaymentMethod | null> {
    return prisma.paymentMethod.findFirst({ where: { customerId, isDefault: true } });
  }

  async createPaymentMethod(data: {
    customerId: string;
    stripePaymentMethodId: string;
    type: string;
    last4?: string;
    brand?: string;
    expiryMonth?: number;
    expiryYear?: number;
    isDefault?: boolean;
  }): Promise<PaymentMethod> {
    return prisma.paymentMethod.create({ data });
  }

  async setDefaultPaymentMethod(customerId: string, paymentMethodId: string): Promise<void> {
    await prisma.$transaction([
      prisma.paymentMethod.updateMany({ where: { customerId }, data: { isDefault: false } }),
      prisma.paymentMethod.update({ where: { id: paymentMethodId }, data: { isDefault: true } }),
    ]);
  }

  async deletePaymentMethod(id: string): Promise<void> {
    await prisma.paymentMethod.delete({ where: { id } });
  }

  // --- Plan Limits ---
  async findPlanLimit(plan: PlanType): Promise<PlanLimit | null> {
    return prisma.planLimit.findUnique({ where: { plan } });
  }

  async findAllPlanLimits(): Promise<PlanLimit[]> {
    return prisma.planLimit.findMany({ orderBy: { priceMonthly: 'asc' } });
  }
}
