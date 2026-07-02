import { EventPublisher } from '@boardpilot/events';
import { EventMetadata } from '@boardpilot/types';
import logger from '@boardpilot/logger';

const PROJECT_EXCHANGE = 'project.exchange';

export class BoardEventPublisher {
  constructor(private readonly publisher: EventPublisher) {}

  async publishBoardCreated(board: Record<string, unknown>, metadata: EventMetadata): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        PROJECT_EXCHANGE,
        'board.created',
        board['id'] as string,
        'Board',
        'board.created',
        board,
        metadata
      );
    } catch (err) {
      logger.error({ err, boardId: board['id'] }, 'Failed to publish board.created event');
    }
  }

  async publishBoardUpdated(board: Record<string, unknown>, metadata: EventMetadata): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        PROJECT_EXCHANGE,
        'board.updated',
        board['id'] as string,
        'Board',
        'board.updated',
        board,
        metadata
      );
    } catch (err) {
      logger.error({ err, boardId: board['id'] }, 'Failed to publish board.updated event');
    }
  }

  async publishBoardDeleted(boardId: string, metadata: EventMetadata): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        PROJECT_EXCHANGE,
        'board.deleted',
        boardId,
        'Board',
        'board.deleted',
        { id: boardId },
        metadata
      );
    } catch (err) {
      logger.error({ err, boardId }, 'Failed to publish board.deleted event');
    }
  }

  async publishColumnCreated(
    column: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        PROJECT_EXCHANGE,
        'column.created',
        column['id'] as string,
        'BoardColumn',
        'column.created',
        column,
        metadata
      );
    } catch (err) {
      logger.error({ err, columnId: column['id'] }, 'Failed to publish column.created event');
    }
  }

  async publishColumnUpdated(
    column: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        PROJECT_EXCHANGE,
        'column.updated',
        column['id'] as string,
        'BoardColumn',
        'column.updated',
        column,
        metadata
      );
    } catch (err) {
      logger.error({ err, columnId: column['id'] }, 'Failed to publish column.updated event');
    }
  }

  async publishColumnDeleted(columnId: string, metadata: EventMetadata): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        PROJECT_EXCHANGE,
        'column.deleted',
        columnId,
        'BoardColumn',
        'column.deleted',
        { id: columnId },
        metadata
      );
    } catch (err) {
      logger.error({ err, columnId }, 'Failed to publish column.deleted event');
    }
  }

  async publishSwimlaneCreated(
    swimlane: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        PROJECT_EXCHANGE,
        'swimlane.created',
        swimlane['id'] as string,
        'Swimlane',
        'swimlane.created',
        swimlane,
        metadata
      );
    } catch (err) {
      logger.error({ err, swimlaneId: swimlane['id'] }, 'Failed to publish swimlane.created event');
    }
  }

  async publishSwimlaneUpdated(
    swimlane: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        PROJECT_EXCHANGE,
        'swimlane.updated',
        swimlane['id'] as string,
        'Swimlane',
        'swimlane.updated',
        swimlane,
        metadata
      );
    } catch (err) {
      logger.error({ err, swimlaneId: swimlane['id'] }, 'Failed to publish swimlane.updated event');
    }
  }
}
