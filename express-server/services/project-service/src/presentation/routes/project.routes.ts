import { Router } from 'express';
import { authenticate, validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import { getPrismaClient } from '../../infrastructure/database/prisma';
import { getRabbitMQConnection } from '@boardpilot/events';
import { PrismaProjectRepository } from '../../infrastructure/repositories/PrismaProjectRepository';
import { PrismaProjectMemberRepository } from '../../infrastructure/repositories/PrismaProjectMemberRepository';
import { PrismaLabelRepository } from '../../infrastructure/repositories/PrismaLabelRepository';
import { PrismaMilestoneRepository } from '../../infrastructure/repositories/PrismaMilestoneRepository';
import { ProjectEventPublisher } from '../../infrastructure/events/ProjectEventPublisher';
import { CreateProjectUseCase } from '../../application/use-cases/project/CreateProjectUseCase';
import { GetProjectUseCase } from '../../application/use-cases/project/GetProjectUseCase';
import { ListProjectsUseCase } from '../../application/use-cases/project/ListProjectsUseCase';
import { UpdateProjectUseCase } from '../../application/use-cases/project/UpdateProjectUseCase';
import { DeleteProjectUseCase } from '../../application/use-cases/project/DeleteProjectUseCase';
import { GetMembersUseCase } from '../../application/use-cases/project/GetMembersUseCase';
import { AddMemberUseCase } from '../../application/use-cases/project/AddMemberUseCase';
import { UpdateMemberRoleUseCase } from '../../application/use-cases/project/UpdateMemberRoleUseCase';
import { RemoveMemberUseCase } from '../../application/use-cases/project/RemoveMemberUseCase';
import { CreateLabelUseCase } from '../../application/use-cases/label/CreateLabelUseCase';
import { ListLabelsUseCase } from '../../application/use-cases/label/ListLabelsUseCase';
import { UpdateLabelUseCase } from '../../application/use-cases/label/UpdateLabelUseCase';
import { DeleteLabelUseCase } from '../../application/use-cases/label/DeleteLabelUseCase';
import { CreateMilestoneUseCase } from '../../application/use-cases/milestone/CreateMilestoneUseCase';
import { ListMilestonesUseCase } from '../../application/use-cases/milestone/ListMilestonesUseCase';
import { UpdateMilestoneUseCase } from '../../application/use-cases/milestone/UpdateMilestoneUseCase';
import { DeleteMilestoneUseCase } from '../../application/use-cases/milestone/DeleteMilestoneUseCase';
import { ProjectController } from '../controllers/ProjectController';
import { LabelController } from '../controllers/LabelController';
import { MilestoneController } from '../controllers/MilestoneController';
import {
  createProjectSchema,
  updateProjectSchema,
  listProjectsSchema,
  projectIdParamSchema,
  addMemberSchema,
  updateMemberRoleSchema,
  memberParamSchema,
  createLabelSchema,
  updateLabelSchema,
  labelParamSchema,
  createMilestoneSchema,
  updateMilestoneSchema,
  milestoneParamSchema,
} from '../validators/project.validators';

export function createProjectRouter(): Router {
  const router = Router();

  // ── Dependency wiring ──────────────────────────────────────────────────────
  const prisma = getPrismaClient();
  const rabbitMQ = getRabbitMQConnection();

  const projectRepo = new PrismaProjectRepository(prisma);
  const memberRepo = new PrismaProjectMemberRepository(prisma);
  const labelRepo = new PrismaLabelRepository(prisma);
  const milestoneRepo = new PrismaMilestoneRepository(prisma);
  const eventPublisher = new ProjectEventPublisher(rabbitMQ);

  // Project use cases
  const createProjectUseCase = new CreateProjectUseCase(projectRepo, memberRepo, eventPublisher);
  const getProjectUseCase = new GetProjectUseCase(projectRepo);
  const listProjectsUseCase = new ListProjectsUseCase(projectRepo);
  const updateProjectUseCase = new UpdateProjectUseCase(projectRepo, eventPublisher);
  const deleteProjectUseCase = new DeleteProjectUseCase(projectRepo, eventPublisher);
  const getMembersUseCase = new GetMembersUseCase(projectRepo, memberRepo);
  const addMemberUseCase = new AddMemberUseCase(projectRepo, memberRepo, eventPublisher);
  const updateMemberRoleUseCase = new UpdateMemberRoleUseCase(projectRepo, memberRepo);
  const removeMemberUseCase = new RemoveMemberUseCase(projectRepo, memberRepo);

  // Label use cases
  const createLabelUseCase = new CreateLabelUseCase(projectRepo, labelRepo);
  const listLabelsUseCase = new ListLabelsUseCase(projectRepo, labelRepo);
  const updateLabelUseCase = new UpdateLabelUseCase(labelRepo);
  const deleteLabelUseCase = new DeleteLabelUseCase(labelRepo);

  // Milestone use cases
  const createMilestoneUseCase = new CreateMilestoneUseCase(projectRepo, milestoneRepo);
  const listMilestonesUseCase = new ListMilestonesUseCase(projectRepo, milestoneRepo);
  const updateMilestoneUseCase = new UpdateMilestoneUseCase(milestoneRepo);
  const deleteMilestoneUseCase = new DeleteMilestoneUseCase(milestoneRepo);

  // Controllers
  const projectController = new ProjectController(
    createProjectUseCase,
    getProjectUseCase,
    listProjectsUseCase,
    updateProjectUseCase,
    deleteProjectUseCase,
    getMembersUseCase,
    addMemberUseCase,
    updateMemberRoleUseCase,
    removeMemberUseCase
  );

  const labelController = new LabelController(
    createLabelUseCase,
    listLabelsUseCase,
    updateLabelUseCase,
    deleteLabelUseCase
  );

  const milestoneController = new MilestoneController(
    createMilestoneUseCase,
    listMilestonesUseCase,
    updateMilestoneUseCase,
    deleteMilestoneUseCase
  );

  // ── Project routes ─────────────────────────────────────────────────────────

  // POST /projects
  router.post(
    '/',
    authenticate,
    validateBody(createProjectSchema),
    projectController.create
  );

  // GET /projects
  router.get(
    '/',
    authenticate,
    validateQuery(listProjectsSchema),
    projectController.list
  );

  // GET /projects/:id
  router.get(
    '/:id',
    authenticate,
    validateParams(projectIdParamSchema),
    projectController.getById
  );

  // PUT /projects/:id
  router.put(
    '/:id',
    authenticate,
    validateParams(projectIdParamSchema),
    validateBody(updateProjectSchema),
    projectController.update
  );

  // DELETE /projects/:id
  router.delete(
    '/:id',
    authenticate,
    validateParams(projectIdParamSchema),
    projectController.delete
  );

  // ── Member routes ──────────────────────────────────────────────────────────

  // GET /projects/:id/members
  router.get(
    '/:id/members',
    authenticate,
    validateParams(projectIdParamSchema),
    projectController.getMembers
  );

  // POST /projects/:id/members
  router.post(
    '/:id/members',
    authenticate,
    validateParams(projectIdParamSchema),
    validateBody(addMemberSchema),
    projectController.addMember
  );

  // PUT /projects/:id/members/:userId/role
  router.put(
    '/:id/members/:userId/role',
    authenticate,
    validateParams(memberParamSchema),
    validateBody(updateMemberRoleSchema),
    projectController.updateMemberRole
  );

  // DELETE /projects/:id/members/:userId
  router.delete(
    '/:id/members/:userId',
    authenticate,
    validateParams(memberParamSchema),
    projectController.removeMember
  );

  // ── Label routes ───────────────────────────────────────────────────────────

  // GET /projects/:id/labels
  router.get(
    '/:id/labels',
    authenticate,
    validateParams(projectIdParamSchema),
    labelController.list
  );

  // POST /projects/:id/labels
  router.post(
    '/:id/labels',
    authenticate,
    validateParams(projectIdParamSchema),
    validateBody(createLabelSchema),
    labelController.create
  );

  // PUT /projects/:id/labels/:labelId
  router.put(
    '/:id/labels/:labelId',
    authenticate,
    validateParams(labelParamSchema),
    validateBody(updateLabelSchema),
    labelController.update
  );

  // DELETE /projects/:id/labels/:labelId
  router.delete(
    '/:id/labels/:labelId',
    authenticate,
    validateParams(labelParamSchema),
    labelController.delete
  );

  // ── Milestone routes ───────────────────────────────────────────────────────

  // GET /projects/:id/milestones
  router.get(
    '/:id/milestones',
    authenticate,
    validateParams(projectIdParamSchema),
    milestoneController.list
  );

  // POST /projects/:id/milestones
  router.post(
    '/:id/milestones',
    authenticate,
    validateParams(projectIdParamSchema),
    validateBody(createMilestoneSchema),
    milestoneController.create
  );

  // PUT /projects/:id/milestones/:mId
  router.put(
    '/:id/milestones/:mId',
    authenticate,
    validateParams(milestoneParamSchema),
    validateBody(updateMilestoneSchema),
    milestoneController.update
  );

  // DELETE /projects/:id/milestones/:mId
  router.delete(
    '/:id/milestones/:mId',
    authenticate,
    validateParams(milestoneParamSchema),
    milestoneController.delete
  );

  return router;
}

export { createProjectRouter as projectRouter };
