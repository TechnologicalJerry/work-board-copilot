import { z } from 'zod';

export const createCustomerSchema = z.object({
  organizationId: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1).max(200),
});

export const createSubscriptionSchema = z.object({
  organizationId: z.string().uuid(),
  plan: z.enum(['STARTER', 'PROFESSIONAL', 'ENTERPRISE']),
  interval: z.enum(['monthly', 'yearly']),
  trialDays: z.number().int().min(0).max(30).optional(),
});

export const cancelSubscriptionSchema = z.object({
  organizationId: z.string().uuid(),
});

export const attachPaymentMethodSchema = z.object({
  paymentMethodId: z.string().min(1),
});

export const billingPortalSchema = z.object({
  returnUrl: z.string().url(),
});

export const validateCouponSchema = z.object({
  code: z.string().min(1),
});
