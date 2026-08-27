import { TestBed } from '@angular/core/testing';
import { BillingState } from './billing.state';

describe('BillingState', () => {
  let state: BillingState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingState],
    });
    state = TestBed.inject(BillingState);
  });

  it('should store subscription and compute active plan tier', () => {
    expect(state.activePlanTier()).toBe('STARTER');

    state.setSubscription({
      id: 'sub-1',
      organizationId: 'o-1',
      plan: 'ENTERPRISE',
      interval: 'yearly',
      status: 'ACTIVE',
      currentPeriodStart: '',
      currentPeriodEnd: '',
    });

    expect(state.activePlanTier()).toBe('ENTERPRISE');
  });
});
