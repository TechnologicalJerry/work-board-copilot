export const taskIndexName = 'boardpilot_tasks';

export const taskMapping = {
  mappings: {
    properties: {
      title: {
        type: 'text' as const,
        fields: {
          keyword: { type: 'keyword' as const },
        },
      },
      description: { type: 'text' as const },
      type: { type: 'keyword' as const },
      status: { type: 'keyword' as const },
      priority: { type: 'keyword' as const },
      assigneeId: { type: 'keyword' as const },
      projectId: { type: 'keyword' as const },
      workspaceId: { type: 'keyword' as const },
      organizationId: { type: 'keyword' as const },
      labels: { type: 'keyword' as const },
      sprintId: { type: 'keyword' as const },
      reporterId: { type: 'keyword' as const },
      createdAt: { type: 'date' as const },
      updatedAt: { type: 'date' as const },
    },
  },
  settings: {
    number_of_shards: 1,
    number_of_replicas: 1,
    analysis: {
      analyzer: {
        default: {
          type: 'standard' as const,
        },
      },
    },
  },
};
