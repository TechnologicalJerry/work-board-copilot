import { Component, OnInit, inject } from '@angular/core';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { BillingApiService } from '../../services/billing-api.service';
import { BillingState } from '../../state/billing.state';
import { EntitlementService } from '../../services/entitlement.service';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { PlanTier } from '../../models/billing.model';

@Component({
  selector: 'app-billing-overview-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Billing & Subscription Plans"
      subtitle="Manage organization plan tiers, feature entitlements, seat usage, and invoices."
    >
      <button
        type="button"
        (click)="onOpenPortal()"
        [disabled]="!currentOrgId()"
        class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white font-medium text-xs border border-slate-700 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Stripe Customer Portal</span>
      </button>
    </app-page-header>

    <!-- Active Subscription Banner -->
    <div class="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/80 to-slate-900 border border-indigo-500/30 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="space-y-1">
        <span class="text-xs text-indigo-400 font-mono font-bold uppercase tracking-wider">Current Active Plan</span>
        <h2 class="text-2xl font-extrabold text-white flex items-center space-x-3">
          <span>{{ subscription()?.plan || 'STARTER' }} PLAN</span>
          <span class="px-2.5 py-0.5 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {{ subscription()?.status || 'ACTIVE' }}
          </span>
        </h2>
        <p class="text-xs text-slate-400">
          Max Seats: <strong class="text-white">{{ entitlement.maxSeats() }}</strong> • AI Copilot: <strong class="text-white">{{ entitlement.canUseAi() ? 'Included' : 'Upgrade Required' }}</strong>
        </p>
      </div>

      @if (subscription()?.plan !== 'ENTERPRISE') {
        <button
          type="button"
          (click)="onUpgrade('PROFESSIONAL')"
          class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all shrink-0"
        >
          Upgrade to Professional
        </button>
      }
    </div>

    <!-- Plans Comparison Grid -->
    <div class="mb-10 space-y-4">
      <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-2">Available Plans</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Starter Plan -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
          <div class="space-y-3">
            <h4 class="text-base font-bold text-white">Starter</h4>
            <div class="text-2xl font-extrabold text-white font-mono">$0 <span class="text-xs font-normal text-slate-400">/mo</span></div>
            <p class="text-xs text-slate-400">For small teams getting started with agile workboards.</p>
            <ul class="text-xs text-slate-300 space-y-2 pt-2">
              <li class="flex items-center space-x-2"><span>✓</span><span>Up to 5 Team Members</span></li>
              <li class="flex items-center space-x-2"><span>✓</span><span>Basic Task Boards</span></li>
              <li class="flex items-center space-x-2 text-slate-500"><span>✕</span><span>AI Assistance</span></li>
            </ul>
          </div>
          <button
            type="button"
            [disabled]="activePlanTier() === 'STARTER'"
            (click)="onUpgrade('STARTER')"
            class="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white text-xs font-bold transition-colors"
          >
            {{ activePlanTier() === 'STARTER' ? 'Current Plan' : 'Downgrade' }}
          </button>
        </div>

        <!-- Professional Plan -->
        <div class="p-6 rounded-2xl bg-slate-900 border-2 border-indigo-500/50 space-y-4 flex flex-col justify-between relative shadow-xl shadow-indigo-950/40">
          <span class="absolute -top-3 right-6 px-3 py-0.5 text-[9px] font-mono font-bold rounded-full bg-indigo-600 text-white">POPULAR</span>
          <div class="space-y-3">
            <h4 class="text-base font-bold text-white">Professional</h4>
            <div class="text-2xl font-extrabold text-indigo-400 font-mono">$29 <span class="text-xs font-normal text-slate-400">/mo</span></div>
            <p class="text-xs text-slate-400">Full agile workflow automation, sprint velocity, and AI Copilot.</p>
            <ul class="text-xs text-slate-300 space-y-2 pt-2">
              <li class="flex items-center space-x-2"><span>✓</span><span>Up to 25 Team Members</span></li>
              <li class="flex items-center space-x-2"><span>✓</span><span>Workflow Automations</span></li>
              <li class="flex items-center space-x-2"><span>✓</span><span>AI Copilot Assistant</span></li>
            </ul>
          </div>
          <button
            type="button"
            [disabled]="activePlanTier() === 'PROFESSIONAL'"
            (click)="onUpgrade('PROFESSIONAL')"
            class="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-bold shadow-lg shadow-indigo-600/20 transition-colors"
          >
            {{ activePlanTier() === 'PROFESSIONAL' ? 'Current Plan' : 'Select Professional' }}
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
          <div class="space-y-3">
            <h4 class="text-base font-bold text-white">Enterprise</h4>
            <div class="text-2xl font-extrabold text-white font-mono">$99 <span class="text-xs font-normal text-slate-400">/mo</span></div>
            <p class="text-xs text-slate-400">Custom security audit logs, unlimited seats, and dedicated SLA.</p>
            <ul class="text-xs text-slate-300 space-y-2 pt-2">
              <li class="flex items-center space-x-2"><span>✓</span><span>Unlimited Seats</span></li>
              <li class="flex items-center space-x-2"><span>✓</span><span>Security Audit Logs</span></li>
              <li class="flex items-center space-x-2"><span>✓</span><span>Dedicated AI Resources</span></li>
            </ul>
          </div>
          <button
            type="button"
            [disabled]="activePlanTier() === 'ENTERPRISE'"
            (click)="onUpgrade('ENTERPRISE')"
            class="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white text-xs font-bold transition-colors"
          >
            {{ activePlanTier() === 'ENTERPRISE' ? 'Current Plan' : 'Select Enterprise' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Invoices History -->
    <div class="space-y-4">
      <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-2">Recent Invoices</h3>
      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-950/80 text-[10px] text-slate-400 uppercase tracking-wider font-mono">
            <tr>
              <th class="p-3.5">Invoice #</th>
              <th class="p-3.5">Amount</th>
              <th class="p-3.5">Status</th>
              <th class="p-3.5">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80">
            @for (inv of invoices(); track inv.id) {
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="p-3.5 font-mono font-bold text-white">{{ inv.number }}</td>
                <td class="p-3.5 font-mono font-bold text-emerald-400 font-mono">\${{ inv.amount }}</td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 text-[9px] font-mono rounded bg-emerald-500/10 text-emerald-400 uppercase border border-emerald-500/20 font-bold">
                    {{ inv.status }}
                  </span>
                </td>
                <td class="p-3.5 text-slate-400 font-mono">{{ inv.createdAt }}</td>
              </tr>
            } @empty {
              <tr>
                <td colspan="4" class="p-8 text-center text-xs text-slate-500">
                  No billing invoices generated yet.
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class BillingOverviewPageComponent implements OnInit {
  private readonly billingApi = inject(BillingApiService);
  private readonly billingState = inject(BillingState);
  readonly entitlement = inject(EntitlementService);
  private readonly orgContext = inject(OrganizationContextService);

  readonly subscription = this.billingState.subscription;
  readonly invoices = this.billingState.invoices;
  readonly activePlanTier = this.billingState.activePlanTier;
  readonly currentOrgId = this.orgContext.organizationId;

  ngOnInit(): void {
    const orgId = this.currentOrgId();
    if (orgId) {
      this.billingApi.getCustomer(orgId).subscribe({
        next: (res) => this.billingState.setSubscription(res.data),
      });

      this.billingApi.getInvoices(orgId).subscribe({
        next: (res) => this.billingState.setInvoices(res.data),
      });
    }
  }

  onUpgrade(plan: PlanTier): void {
    const orgId = this.currentOrgId();
    if (!orgId) return;

    this.billingApi.createSubscription({
      organizationId: orgId,
      plan,
      interval: 'monthly',
    }).subscribe({
      next: (res) => this.billingState.setSubscription(res.data),
    });
  }

  onOpenPortal(): void {
    const orgId = this.currentOrgId();
    if (!orgId) return;

    this.billingApi.getBillingPortal(orgId, { returnUrl: window.location.href }).subscribe({
      next: (res) => {
        if (res.data?.url) {
          window.location.href = res.data.url;
        }
      },
    });
  }
}
