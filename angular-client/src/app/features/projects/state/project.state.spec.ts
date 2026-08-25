import { TestBed } from '@angular/core/testing';
import { ProjectState } from './project.state';

describe('ProjectState', () => {
  let state: ProjectState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectState],
    });
    state = TestBed.inject(ProjectState);
  });

  it('should store projects and update project count', () => {
    state.setProjects([
      { id: 'p-1', organizationId: 'o-1', workspaceId: 'w-1', name: 'Alpha', key: 'ALP' },
      { id: 'p-2', organizationId: 'o-1', workspaceId: 'w-1', name: 'Beta', key: 'BET' },
    ]);
    expect(state.projectCount()).toBe(2);
  });

  it('should add a project', () => {
    state.addProject({ id: 'p-new', organizationId: 'o-1', workspaceId: 'w-1', name: 'New', key: 'NEW' });
    expect(state.projectCount()).toBe(1);
  });
});
