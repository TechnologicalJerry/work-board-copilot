import { TestBed } from '@angular/core/testing';
import { TaskState } from './task.state';

describe('TaskState', () => {
  let state: TaskState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskState],
    });
    state = TestBed.inject(TaskState);
  });

  it('should filter tasks by status and priority', () => {
    state.setTasks([
      { id: 't-1', organizationId: 'o-1', projectId: 'p-1', title: 'Task One', status: 'TODO', priority: 'HIGH' },
      { id: 't-2', organizationId: 'o-1', projectId: 'p-1', title: 'Task Two', status: 'IN_PROGRESS', priority: 'LOW' },
    ]);

    state.setStatusFilter('TODO');
    expect(state.filteredTasks().length).toBe(1);
    expect(state.filteredTasks()[0].id).toBe('t-1');
  });

  it('should update task status', () => {
    state.setTasks([{ id: 't-1', organizationId: 'o-1', projectId: 'p-1', title: 'Task One', status: 'TODO' }]);
    state.updateTaskStatus('t-1', 'DONE');
    expect(state.filteredTasks()[0].status).toBe('DONE');
  });
});
