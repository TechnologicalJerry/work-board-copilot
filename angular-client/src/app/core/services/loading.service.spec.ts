import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingService],
    });
    service = TestBed.inject(LoadingService);
  });

  it('should initialize with loading false and zero request count', () => {
    expect(service.isLoading()).toBe(false);
    expect(service.requestCount()).toBe(0);
  });

  it('should track global loading start and stop correctly', () => {
    service.startLoading();
    expect(service.isLoading()).toBe(true);
    expect(service.requestCount()).toBe(1);

    service.startLoading();
    expect(service.requestCount()).toBe(2);
    expect(service.isLoading()).toBe(true);

    service.stopLoading();
    expect(service.requestCount()).toBe(1);
    expect(service.isLoading()).toBe(true);

    service.stopLoading();
    expect(service.requestCount()).toBe(0);
    expect(service.isLoading()).toBe(false);
  });

  it('should not decrement request count below zero', () => {
    service.stopLoading();
    expect(service.requestCount()).toBe(0);
    expect(service.isLoading()).toBe(false);
  });

  it('should track feature-specific loading state', () => {
    expect(service.isFeatureLoading('projects')).toBe(false);

    service.setFeatureLoading('projects', true);
    expect(service.isFeatureLoading('projects')).toBe(true);

    service.setFeatureLoading('projects', false);
    expect(service.isFeatureLoading('projects')).toBe(false);
  });

  it('should reset all states when resetLoading is called', () => {
    service.startLoading();
    service.setFeatureLoading('projects', true);

    service.resetLoading();
    expect(service.isLoading()).toBe(false);
    expect(service.requestCount()).toBe(0);
    expect(service.isFeatureLoading('projects')).toBe(false);
  });
});
