import { Injectable, computed, signal } from '@angular/core';
import { SearchResultItem, SearchEntityType } from '../models/search.model';

@Injectable({
  providedIn: 'root',
})
export class SearchState {
  private readonly querySignal = signal<string>('');
  private readonly selectedTypeSignal = signal<SearchEntityType>('global');
  private readonly resultsSignal = signal<SearchResultItem[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly query = this.querySignal.asReadonly();
  readonly selectedType = this.selectedTypeSignal.asReadonly();
  readonly results = this.resultsSignal.asReadonly();
  readonly isLoading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  readonly resultCount = computed(() => this.resultsSignal().length);

  setQuery(query: string): void {
    this.querySignal.set(query);
  }

  setSelectedType(type: SearchEntityType): void {
    this.selectedTypeSignal.set(type);
  }

  setResults(results: SearchResultItem[]): void {
    this.resultsSignal.set(results);
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }

  clear(): void {
    this.querySignal.set('');
    this.resultsSignal.set([]);
    this.errorSignal.set(null);
  }
}
