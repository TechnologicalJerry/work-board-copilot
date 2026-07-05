import sharp from 'sharp';
import logger from '@boardpilot/logger';

const THUMBNAIL_WIDTH = 400;
const THUMBNAIL_HEIGHT = 400;

const IMAGE_MIME_TYPES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
  'image/bmp',
  'image/tiff',
]);

export function isImage(mimeType: string): boolean {
  return IMAGE_MIME_TYPES.has(mimeType.toLowerCase());
}

export async function generateThumbnail(buffer: Buffer, mimeType: string): Promise<Buffer> {
  try {
    const thumbnail = await sharp(buffer)
      .resize(THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toBuffer();

    logger.debug({ mimeType, size: thumbnail.length }, 'Thumbnail generated');
    return thumbnail;
  } catch (err) {
    logger.error({ err, mimeType }, 'Failed to generate thumbnail');
    throw err;
  }
}

export async function getDimensions(buffer: Buffer): Promise<{ width: number; height: number }> {
  const metadata = await sharp(buffer).metadata();
  return {
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
  };
}
