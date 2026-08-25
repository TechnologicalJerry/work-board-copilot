import { Injectable, computed, signal } from '@angular/core';
import { Project, ProjectMember, ProjectLabel, ProjectMilestone } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectState {
  private readonly projectsSignal = signal<Project[]>([]);
  private readonly selectedProjectSignal = signal<Project | null>(null);
  private readonly membersSignal = signal<ProjectMember[]>([]);
  private readonly labelsSignal = signal<ProjectLabel[]>([]);
  private readonly milestonesSignal = signal<ProjectMilestone[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Signal of projects list */
  readonly projects = this.projectsSignal.asReadonly();

  /** Signal of active selected project */
  readonly selectedProject = this.selectedProjectSignal.asReadonly();

  /** Signal of project members */
  readonly members = this.membersSignal.asReadonly();

  /** Signal of project labels */
  readonly labels = this.labelsSignal.asReadonly();

  /** Signal of project milestones */
  readonly milestones = this.milestonesSignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Project count */
  readonly projectCount = computed(() => this.projectsSignal().length);

  setProjects(projects: Project[]): void {
    this.projectsSignal.set(projects);
  }

  setSelectedProject(project: Project | null): void {
    this.selectedProjectSignal.set(project);
  }

  setMembers(members: ProjectMember[]): void {
    this.membersSignal.set(members);
  }

  setLabels(labels: ProjectLabel[]): void {
    this.labelsSignal.set(labels);
  }

  setMilestones(milestones: ProjectMilestone[]): void {
    this.milestonesSignal.set(milestones);
  }

  addProject(project: Project): void {
    this.projectsSignal.update((current) => [project, ...current]);
  }

  updateProject(updated: Project): void {
    this.projectsSignal.update((current) =>
      current.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))
    );
    if (this.selectedProjectSignal()?.id === updated.id) {
      this.selectedProjectSignal.set(updated);
    }
  }

  removeProject(id: string): void {
    this.projectsSignal.update((current) => current.filter((p) => p.id !== id));
    if (this.selectedProjectSignal()?.id === id) {
      this.selectedProjectSignal.set(null);
    }
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
