import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class RefreshDto {
  @ApiPropertyOptional({ description: 'Refresh token (if not sent via httpOnly cookie)' })
  @IsOptional()
  @IsString()
  refreshToken?: string;
}
