import { Injectable, computed, signal } from '@angular/core';
import { Plan, Subscription, Invoice } from '../models/billing.model';

@Injectable({
  providedIn: 'root',
})
export class BillingState {
  private readonly plansSignal = signal<Plan[]>([]);
  private readonly subscriptionSignal = signal<Subscription | null>(null);
  private readonly invoicesSignal = signal<Invoice[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly plans = this.plansSignal.asReadonly();
  readonly subscription = this.subscriptionSignal.asReadonly();
  readonly invoices = this.invoicesSignal.asReadonly();
  readonly isLoading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  readonly activePlanTier = computed(() => this.subscriptionSignal()?.plan || 'STARTER');

  setPlans(plans: Plan[]): void {
    this.plansSignal.set(plans);
  }

  setSubscription(subscription: Subscription | null): void {
    this.subscriptionSignal.set(subscription);
  }

  setInvoices(invoices: Invoice[]): void {
    this.invoicesSignal.set(invoices);
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
