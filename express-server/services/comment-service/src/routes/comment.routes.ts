import { Router } from 'express';
import { authenticate } from '@boardpilot/middlewares';
import { validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import {
  createCommentSchema,
  updateCommentSchema,
  addReactionSchema,
  listCommentsQuerySchema,
  listRepliesQuerySchema,
  commentIdParamSchema,
} from '../validators/comment.validators';
import * as CommentController from '../controllers/CommentController';

const router = Router();

// All routes require authentication
router.use(authenticate);

// List comments for an entity
router.get('/', validateQuery(listCommentsQuerySchema), CommentController.listComments);

// Create comment
router.post('/', validateBody(createCommentSchema), CommentController.createComment);

// Get replies for a comment
router.get(
  '/:id/replies',
  validateParams(commentIdParamSchema),
  validateQuery(listRepliesQuerySchema),
  CommentController.listReplies
);

// Update comment
router.patch(
  '/:id',
  validateParams(commentIdParamSchema),
  validateBody(updateCommentSchema),
  CommentController.updateComment
);

// Delete comment
router.delete(
  '/:id',
  validateParams(commentIdParamSchema),
  CommentController.deleteComment
);

// React to comment
router.post(
  '/:id/reactions',
  validateParams(commentIdParamSchema),
  validateBody(addReactionSchema),
  CommentController.addReaction
);

// Resolve comment
router.patch(
  '/:id/resolve',
  validateParams(commentIdParamSchema),
  CommentController.resolveComment
);

// Pin/unpin comment
router.patch(
  '/:id/pin',
  validateParams(commentIdParamSchema),
  CommentController.pinComment
);

export default router;
