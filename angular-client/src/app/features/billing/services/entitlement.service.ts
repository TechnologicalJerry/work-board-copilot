import { Injectable, computed, inject } from '@angular/core';
import { BillingState } from '../state/billing.state';

@Injectable({
  providedIn: 'root',
})
export class EntitlementService {
  private readonly billingState = inject(BillingState);

  /** Current plan tier signal */
  readonly planTier = computed(() => this.billingState.subscription()?.plan || 'STARTER');

  /** Can use AI Copilot feature */
  readonly canUseAi = computed(() => {
    const tier = this.planTier();
    return tier === 'PROFESSIONAL' || tier === 'ENTERPRISE';
  });

  /** Can use Automation workflow rules */
  readonly canUseAutomation = computed(() => {
    const tier = this.planTier();
    return tier === 'PROFESSIONAL' || tier === 'ENTERPRISE';
  });

  /** Maximum member seats allowed */
  readonly maxSeats = computed(() => {
    const tier = this.planTier();
    if (tier === 'STARTER') return 5;
    if (tier === 'PROFESSIONAL') return 25;
    return 999;
  });
}
