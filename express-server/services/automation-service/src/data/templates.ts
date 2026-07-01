export const AUTOMATION_TEMPLATES = [
  {
    name: 'Notify when task moved to Done',
    description: 'Automatically notify the reporter when a task status changes to DONE',
    trigger: {
      type: 'task.status_changed',
      conditions: [{ field: 'task.status', operator: 'equals', value: 'DONE' }],
    },
    actions: [
      {
        type: 'send_notification',
        config: {
          recipientId: '{{task.reporterId}}',
          message: 'Task "{{task.title}}" has been marked as Done.',
        },
      },
    ],
  },
  {
    name: 'Auto-assign tasks without assignee',
    description: 'Assign newly created tasks that have no assignee to the project lead',
    trigger: {
      type: 'task.created',
      conditions: [{ field: 'task.assigneeId', operator: 'is_empty' }],
    },
    actions: [
      {
        type: 'assign_user',
        config: {
          userId: '{{project.leadId}}',
        },
      },
    ],
  },
  {
    name: 'Add "Needs Review" label on PR tasks',
    description: 'Automatically label tasks that mention "PR" or "review" in the title',
    trigger: {
      type: 'task.created',
      conditions: [{ field: 'task.title', operator: 'contains', value: 'PR' }],
    },
    actions: [
      {
        type: 'add_label',
        config: { label: 'needs-review' },
      },
    ],
  },
  {
    name: 'Webhook on sprint started',
    description: 'Call an external webhook when a sprint becomes active',
    trigger: {
      type: 'sprint.started',
      conditions: [],
    },
    actions: [
      {
        type: 'call_webhook',
        config: {
          url: 'https://hooks.example.com/sprint-started',
          method: 'POST',
        },
      },
    ],
  },
  {
    name: 'Post comment when task is blocked',
    description: 'Post an automated comment when a task status changes to BLOCKED',
    trigger: {
      type: 'task.status_changed',
      conditions: [{ field: 'task.status', operator: 'equals', value: 'BLOCKED' }],
    },
    actions: [
      {
        type: 'post_comment',
        config: {
          content: '⚠️ This task has been marked as **BLOCKED**. Please update the blockers section or reach out to your team lead.',
        },
      },
    ],
  },
  {
    name: 'Notify team on sprint completion',
    description: 'Send notifications to all assignees when a sprint completes',
    trigger: {
      type: 'sprint.completed',
      conditions: [],
    },
    actions: [
      {
        type: 'send_notification',
        config: {
          message: 'Sprint "{{sprint.name}}" has been completed! 🎉 Great work this sprint.',
        },
      },
    ],
  },
] as const;
