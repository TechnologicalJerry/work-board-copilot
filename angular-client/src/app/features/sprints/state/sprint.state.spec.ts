import { TestBed } from '@angular/core/testing';
import { SprintState } from './sprint.state';

describe('SprintState', () => {
  let state: SprintState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SprintState],
    });
    state = TestBed.inject(SprintState);
  });

  it('should identify active and planned sprints', () => {
    state.setSprints([
      { id: 's-1', projectId: 'p-1', name: 'Sprint 1', status: 'ACTIVE' },
      { id: 's-2', projectId: 'p-1', name: 'Sprint 2', status: 'PLANNED' },
    ]);

    expect(state.activeSprint()?.id).toBe('s-1');
    expect(state.plannedSprints().length).toBe(1);
  });
});
