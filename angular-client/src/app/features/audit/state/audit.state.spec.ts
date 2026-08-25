import { TestBed } from '@angular/core/testing';
import { AuditState } from './audit.state';

describe('AuditState', () => {
  let state: AuditState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditState],
    });
    state = TestBed.inject(AuditState);
  });

  it('should filter audit logs by severity', () => {
    state.setLogs([
      { id: 'a-1', organizationId: 'o-1', action: 'CREATE_TASK', severity: 'low', category: 'data' },
      { id: 'a-2', organizationId: 'o-1', action: 'UPDATE_PERMISSIONS', severity: 'critical', category: 'security' },
    ]);

    expect(state.filteredLogs().length).toBe(2);

    state.setSeverityFilter('critical');
    expect(state.filteredLogs().length).toBe(1);
    expect(state.filteredLogs()[0].id).toBe('a-2');
  });
});
