import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { config } from '../../config';
import logger from '@boardpilot/logger';

const s3Client = new S3Client({
  region: config.AWS_REGION,
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  },
});

export async function uploadFile(
  key: string,
  buffer: Buffer,
  mimeType: string,
  isPublic: boolean = false
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: config.AWS_S3_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: mimeType,
    ACL: isPublic ? 'public-read' : 'private',
  });

  await s3Client.send(command);
  logger.debug({ key, mimeType, size: buffer.length }, 'File uploaded to S3');
  return getPublicUrl(key);
}

export async function getPresignedUploadUrl(
  key: string,
  mimeType: string,
  maxSizeMB: number = 100
): Promise<string> {
  // Note: PutObjectCommand has no field to enforce a max upload size for a
  // presigned PUT URL (ContentLengthRange is only valid for presigned POST
  // policy conditions). Max size is enforced at the application level before
  // this URL is generated (see FileService.getPresignedUploadUrl).
  const command = new PutObjectCommand({
    Bucket: config.AWS_S3_BUCKET,
    Key: key,
    ContentType: mimeType,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: 900 }); // 15 min
  return url;
}

export async function getPresignedDownloadUrl(
  key: string,
  fileName: string,
  expirySeconds: number = 3600
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: config.AWS_S3_BUCKET,
    Key: key,
    ResponseContentDisposition: `attachment; filename="${encodeURIComponent(fileName)}"`,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: expirySeconds });
  return url;
}

export async function deleteObject(key: string): Promise<void> {
  const command = new DeleteObjectCommand({
    Bucket: config.AWS_S3_BUCKET,
    Key: key,
  });

  await s3Client.send(command);
  logger.debug({ key }, 'File deleted from S3');
}

export function getPublicUrl(key: string): string {
  return `https://${config.AWS_S3_BUCKET}.s3.${config.AWS_REGION}.amazonaws.com/${key}`;
}
