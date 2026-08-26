import { TestBed } from '@angular/core/testing';
import { TimeTrackingState } from './time-tracking.state';

describe('TimeTrackingState', () => {
  let state: TimeTrackingState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeTrackingState],
    });
    state = TestBed.inject(TimeTrackingState);
  });

  it('should store entries and compute total logged seconds', () => {
    state.setEntries([
      { id: 'e-1', organizationId: 'o-1', projectId: 'p-1', isBillable: true, durationSeconds: 3600, status: 'STOPPED' },
      { id: 'e-2', organizationId: 'o-1', projectId: 'p-1', isBillable: true, durationSeconds: 7200, status: 'STOPPED' },
    ]);

    expect(state.totalLoggedSeconds()).toBe(10800);
  });
});
