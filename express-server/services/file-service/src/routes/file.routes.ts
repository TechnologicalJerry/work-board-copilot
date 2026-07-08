import { Router } from 'express';
import multer from 'multer';
import { authenticate } from '@boardpilot/middlewares';
import { validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import {
  uploadFileSchema,
  presignedUploadSchema,
  fileIdParamSchema,
  listFilesQuerySchema,
} from '../validators/file.validators';
import * as FileController from '../controllers/FileController';

const router = Router();

// Configure multer for in-memory storage (files passed directly to S3)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
});

router.use(authenticate);

// List files
router.get('/', validateQuery(listFilesQuerySchema), FileController.listFiles);

// Files for entity
router.get('/entity', FileController.getFilesForEntity);

// Upload file (multipart)
router.post('/', upload.single('file'), FileController.uploadFile);

// Get presigned upload URL
router.post('/presigned-upload', validateBody(presignedUploadSchema), FileController.getPresignedUploadUrl);

// Get presigned download URL
router.get('/:id/download', validateParams(fileIdParamSchema), FileController.getDownloadUrl);

// Delete file
router.delete('/:id', validateParams(fileIdParamSchema), FileController.deleteFile);

export default router;
