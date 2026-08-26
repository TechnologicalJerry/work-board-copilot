import { TestBed } from '@angular/core/testing';
import { ReportState } from './report.state';

describe('ReportState', () => {
  let state: ReportState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportState],
    });
    state = TestBed.inject(ReportState);
  });

  it('should store velocity report data', () => {
    state.setVelocity({ projectId: 'p-1', sprints: [], averageVelocity: 30 });
    expect(state.velocity()?.averageVelocity).toBe(30);
  });
});
