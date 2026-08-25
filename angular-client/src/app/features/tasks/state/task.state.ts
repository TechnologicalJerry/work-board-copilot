import { Injectable, computed, signal } from '@angular/core';
import { Task, TaskStatus, TaskPriority } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskState {
  private readonly tasksSignal = signal<Task[]>([]);
  private readonly selectedTaskSignal = signal<Task | null>(null);
  private readonly statusFilterSignal = signal<TaskStatus | 'ALL'>('ALL');
  private readonly priorityFilterSignal = signal<TaskPriority | 'ALL'>('ALL');
  private readonly searchQuerySignal = signal<string>('');
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Signal of task list */
  readonly tasks = this.tasksSignal.asReadonly();

  /** Signal of active selected task */
  readonly selectedTask = this.selectedTaskSignal.asReadonly();

  /** Active filters */
  readonly statusFilter = this.statusFilterSignal.asReadonly();
  readonly priorityFilter = this.priorityFilterSignal.asReadonly();
  readonly searchQuery = this.searchQuerySignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Filtered tasks list */
  readonly filteredTasks = computed(() => {
    let result = [...this.tasksSignal()];
    const status = this.statusFilterSignal();
    const prio = this.priorityFilterSignal();
    const q = this.searchQuerySignal().toLowerCase().trim();

    if (status !== 'ALL') {
      result = result.filter((t) => t.status === status);
    }
    if (prio !== 'ALL') {
      result = result.filter((t) => t.priority === prio);
    }
    if (q) {
      result = result.filter(
        (t) => t.title.toLowerCase().includes(q) || t.description?.toLowerCase().includes(q)
      );
    }
    return result;
  });

  /** Task counts by status */
  readonly taskCountByStatus = computed(() => {
    const counts: Record<string, number> = {};
    this.tasksSignal().forEach((t) => {
      counts[t.status] = (counts[t.status] || 0) + 1;
    });
    return counts;
  });

  setTasks(tasks: Task[]): void {
    this.tasksSignal.set(tasks);
  }

  setSelectedTask(task: Task | null): void {
    this.selectedTaskSignal.set(task);
  }

  addTask(task: Task): void {
    this.tasksSignal.update((current) => [task, ...current]);
  }

  updateTask(updated: Task): void {
    this.tasksSignal.update((current) =>
      current.map((t) => (t.id === updated.id ? { ...t, ...updated } : t))
    );
    if (this.selectedTaskSignal()?.id === updated.id) {
      this.selectedTaskSignal.set(updated);
    }
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus): void {
    this.tasksSignal.update((current) =>
      current.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
    const sel = this.selectedTaskSignal();
    if (sel?.id === taskId) {
      this.selectedTaskSignal.set({ ...sel, status: newStatus });
    }
  }

  removeTask(id: string): void {
    this.tasksSignal.update((current) => current.filter((t) => t.id !== id));
    if (this.selectedTaskSignal()?.id === id) {
      this.selectedTaskSignal.set(null);
    }
  }

  setStatusFilter(status: TaskStatus | 'ALL'): void {
    this.statusFilterSignal.set(status);
  }

  setPriorityFilter(priority: TaskPriority | 'ALL'): void {
    this.priorityFilterSignal.set(priority);
  }

  setSearchQuery(query: string): void {
    this.searchQuerySignal.set(query);
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
