export type PlanTier = 'STARTER' | 'PROFESSIONAL' | 'ENTERPRISE';
export type SubscriptionStatus = 'ACTIVE' | 'TRIALING' | 'PAST_DUE' | 'CANCELED' | 'INCOMPLETE';

export interface Plan {
  id: string;
  tier: PlanTier;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  entitlements: {
    canUseAi: boolean;
    canUseAutomation: boolean;
    maxProjects: number;
    maxSeats: number;
  };
}

export interface Subscription {
  id: string;
  organizationId: string;
  plan: PlanTier;
  interval: 'monthly' | 'yearly';
  status: SubscriptionStatus;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd?: boolean;
}

export interface Invoice {
  id: string;
  organizationId: string;
  number: string;
  amount: number;
  currency: string;
  status: 'paid' | 'open' | 'void' | 'uncollectible';
  pdfUrl?: string;
  createdAt: string;
}

export interface CreateSubscriptionRequest {
  organizationId: string;
  plan: PlanTier;
  interval: 'monthly' | 'yearly';
  trialDays?: number;
}

export interface BillingPortalRequest {
  returnUrl: string;
}
