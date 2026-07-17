import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import {
  requestContextMiddleware,
  errorHandlerMiddleware,
  notFoundMiddleware,
  healthCheckHandler,
} from '@boardpilot/middlewares';

// Infrastructure
import { PrismaSprintRepository } from './infrastructure/repositories/PrismaSprintRepository';
import { PrismaSprintItemRepository } from './infrastructure/repositories/PrismaSprintItemRepository';
import { SprintEventPublisher } from './infrastructure/events/SprintEventPublisher';

// Use cases
import { CreateSprintUseCase } from './application/use-cases/CreateSprintUseCase';
import { GetSprintUseCase } from './application/use-cases/GetSprintUseCase';
import { ListSprintsUseCase } from './application/use-cases/ListSprintsUseCase';
import { UpdateSprintUseCase } from './application/use-cases/UpdateSprintUseCase';
import { DeleteSprintUseCase } from './application/use-cases/DeleteSprintUseCase';
import { StartSprintUseCase } from './application/use-cases/StartSprintUseCase';
import { CompleteSprintUseCase } from './application/use-cases/CompleteSprintUseCase';
import { GetBurndownUseCase } from './application/use-cases/GetBurndownUseCase';
import { GetVelocityUseCase } from './application/use-cases/GetVelocityUseCase';
import { AddSprintItemUseCase } from './application/use-cases/AddSprintItemUseCase';
import { RemoveSprintItemUseCase } from './application/use-cases/RemoveSprintItemUseCase';

// Presentation
import { SprintController } from './presentation/controllers/SprintController';
import { createSprintRouter } from './presentation/routes/sprint.routes';

export function createApp(): express.Application {
  const app = express();

  // Trust first proxy hop (for correct IP behind nginx/ALB)
  app.set('trust proxy', 1);

  // Security headers
  app.use(helmet());

  // CORS
  app.use(
    cors({
      origin: (process.env.ALLOWED_ORIGINS ?? 'http://localhost:3000').split(',').map((o) => o.trim()),
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id', 'X-Correlation-Id'],
    })
  );

  // Rate limiting
  app.use(
    rateLimit({
      windowMs: 900000,
      max: 100,
      standardHeaders: true,
      legacyHeaders: false,
    })
  );

  // Body parsing
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // Request context (requestId, correlationId, req.log)
  app.use(requestContextMiddleware);

  // Health check (no auth required)
  app.get('/health', healthCheckHandler);

  // Dependency injection
  const sprintRepository = new PrismaSprintRepository();
  const itemRepository = new PrismaSprintItemRepository();
  const eventPublisher = new SprintEventPublisher();

  // Use cases
  const createSprintUseCase = new CreateSprintUseCase(sprintRepository, eventPublisher);
  const getSprintUseCase = new GetSprintUseCase(sprintRepository, itemRepository);
  const listSprintsUseCase = new ListSprintsUseCase(sprintRepository);
  const updateSprintUseCase = new UpdateSprintUseCase(sprintRepository);
  const deleteSprintUseCase = new DeleteSprintUseCase(sprintRepository);
  const startSprintUseCase = new StartSprintUseCase(sprintRepository, eventPublisher);
  const completeSprintUseCase = new CompleteSprintUseCase(sprintRepository, itemRepository, eventPublisher);
  const getBurndownUseCase = new GetBurndownUseCase(sprintRepository, itemRepository);
  const getVelocityUseCase = new GetVelocityUseCase(sprintRepository, itemRepository);
  const addSprintItemUseCase = new AddSprintItemUseCase(sprintRepository, itemRepository, eventPublisher);
  const removeSprintItemUseCase = new RemoveSprintItemUseCase(sprintRepository, itemRepository);

  // Controller
  const sprintController = new SprintController(
    createSprintUseCase,
    getSprintUseCase,
    listSprintsUseCase,
    updateSprintUseCase,
    deleteSprintUseCase,
    startSprintUseCase,
    completeSprintUseCase,
    getBurndownUseCase,
    getVelocityUseCase,
    addSprintItemUseCase,
    removeSprintItemUseCase
  );

  // Mount router
  app.use('/api/v1/sprints', createSprintRouter(sprintController));

  // 404 catch-all
  app.use(notFoundMiddleware);

  // Global error handler (must be last)
  app.use(errorHandlerMiddleware);

  return app;
}
