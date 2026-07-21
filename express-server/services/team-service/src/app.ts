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
import { config } from './config';

// Infrastructure
import { PrismaTeamRepository } from './infrastructure/repositories/PrismaTeamRepository';
import { PrismaTeamMemberRepository } from './infrastructure/repositories/PrismaTeamMemberRepository';
import { PrismaDepartmentRepository } from './infrastructure/repositories/PrismaDepartmentRepository';
import { TeamEventPublisher } from './infrastructure/events/TeamEventPublisher';

// Use cases — team
import { CreateTeamUseCase } from './application/use-cases/team/CreateTeamUseCase';
import { GetTeamUseCase } from './application/use-cases/team/GetTeamUseCase';
import { ListTeamsUseCase } from './application/use-cases/team/ListTeamsUseCase';
import { UpdateTeamUseCase } from './application/use-cases/team/UpdateTeamUseCase';
import { DeleteTeamUseCase } from './application/use-cases/team/DeleteTeamUseCase';
import { AddMemberUseCase } from './application/use-cases/team/AddMemberUseCase';
import { UpdateMemberUseCase } from './application/use-cases/team/UpdateMemberUseCase';
import { RemoveMemberUseCase } from './application/use-cases/team/RemoveMemberUseCase';
import { GetCapacityUseCase } from './application/use-cases/team/GetCapacityUseCase';

// Use cases — department
import { CreateDeptUseCase } from './application/use-cases/department/CreateDeptUseCase';
import { ListDeptsUseCase } from './application/use-cases/department/ListDeptsUseCase';
import { UpdateDeptUseCase } from './application/use-cases/department/UpdateDeptUseCase';
import { DeleteDeptUseCase } from './application/use-cases/department/DeleteDeptUseCase';

// Controllers
import { TeamController } from './presentation/controllers/TeamController';
import { DepartmentController } from './presentation/controllers/DepartmentController';

// Routes
import { createTeamRouter } from './presentation/routes/team.routes';
import { createDepartmentRouter } from './presentation/routes/department.routes';

export function createApp(): express.Application {
  const app = express();

  // Trust first proxy hop (for correct IP behind nginx/ALB)
  app.set('trust proxy', 1);

  // Security headers
  app.use(helmet());

  // CORS
  app.use(
    cors({
      origin: config.CORS_ORIGINS.split(',').map((o) => o.trim()),
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
  const teamRepository = new PrismaTeamRepository();
  const memberRepository = new PrismaTeamMemberRepository();
  const departmentRepository = new PrismaDepartmentRepository();
  const eventPublisher = new TeamEventPublisher();

  // Team use cases
  const createTeamUseCase = new CreateTeamUseCase(teamRepository, eventPublisher);
  const getTeamUseCase = new GetTeamUseCase(teamRepository);
  const listTeamsUseCase = new ListTeamsUseCase(teamRepository);
  const updateTeamUseCase = new UpdateTeamUseCase(teamRepository);
  const deleteTeamUseCase = new DeleteTeamUseCase(teamRepository, eventPublisher);
  const addMemberUseCase = new AddMemberUseCase(teamRepository, memberRepository, eventPublisher);
  const updateMemberUseCase = new UpdateMemberUseCase(memberRepository);
  const removeMemberUseCase = new RemoveMemberUseCase(teamRepository, memberRepository, eventPublisher);
  const getCapacityUseCase = new GetCapacityUseCase(teamRepository, memberRepository);

  // Department use cases
  const createDeptUseCase = new CreateDeptUseCase(departmentRepository);
  const listDeptsUseCase = new ListDeptsUseCase(departmentRepository);
  const updateDeptUseCase = new UpdateDeptUseCase(departmentRepository);
  const deleteDeptUseCase = new DeleteDeptUseCase(departmentRepository);

  // Controllers
  const teamController = new TeamController(
    createTeamUseCase,
    getTeamUseCase,
    listTeamsUseCase,
    updateTeamUseCase,
    deleteTeamUseCase,
    addMemberUseCase,
    updateMemberUseCase,
    removeMemberUseCase,
    getCapacityUseCase
  );

  const departmentController = new DepartmentController(
    createDeptUseCase,
    listDeptsUseCase,
    updateDeptUseCase,
    deleteDeptUseCase
  );

  // Mount routers
  app.use('/api/v1/teams', createTeamRouter(teamController));
  app.use('/api/v1/departments', createDepartmentRouter(departmentController));

  // 404 catch-all
  app.use(notFoundMiddleware);

  // Global error handler (must be last)
  app.use(errorHandlerMiddleware);

  return app;
}
