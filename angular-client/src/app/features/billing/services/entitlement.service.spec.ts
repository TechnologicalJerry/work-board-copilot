import { TestBed } from '@angular/core/testing';
import { EntitlementService } from './entitlement.service';
import { BillingState } from '../state/billing.state';

describe('EntitlementService', () => {
  let service: EntitlementService;
  let billingState: BillingState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntitlementService, BillingState],
    });
    service = TestBed.inject(EntitlementService);
    billingState = TestBed.inject(BillingState);
  });

  it('should calculate entitlements based on active subscription plan', () => {
    expect(service.canUseAi()).toBe(false);

    billingState.setSubscription({
      id: 'sub-1',
      organizationId: 'org-1',
      plan: 'PROFESSIONAL',
      interval: 'monthly',
      status: 'ACTIVE',
      currentPeriodStart: '',
      currentPeriodEnd: '',
    });

    expect(service.canUseAi()).toBe(true);
    expect(service.canUseAutomation()).toBe(true);
    expect(service.maxSeats()).toBe(25);
  });
});
