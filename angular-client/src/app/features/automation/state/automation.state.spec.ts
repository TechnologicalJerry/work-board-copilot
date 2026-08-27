import { TestBed } from '@angular/core/testing';
import { AutomationState } from './automation.state';

describe('AutomationState', () => {
  let state: AutomationState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutomationState],
    });
    state = TestBed.inject(AutomationState);
  });

  it('should store workflow rules and filter enabled rules', () => {
    state.setRules([
      { id: 'r-1', organizationId: 'o-1', projectId: 'p-1', name: 'Rule 1', isEnabled: true, trigger: { type: 'task.created' }, actions: [] },
      { id: 'r-2', organizationId: 'o-1', projectId: 'p-1', name: 'Rule 2', isEnabled: false, trigger: { type: 'task.updated' }, actions: [] },
    ]);

    expect(state.ruleCount()).toBe(2);
    expect(state.enabledRules().length).toBe(1);
    expect(state.enabledRules()[0].id).toBe('r-1');
  });
});
