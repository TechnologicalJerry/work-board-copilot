import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService, SafeUser } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { hashPassword, comparePassword, generateSecureToken, sha256 } from '../common/utils/crypto.util';
import { UserRole, UserStatus } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto): Promise<{ user: SafeUser; message: string }> {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('An account with this email address already exists');
    }

    const hashedPassword = await hashPassword(dto.password);

    const user = await this.usersService.create({
      email: dto.email,
      passwordHash: hashedPassword,
      firstName: dto.firstName,
      lastName: dto.lastName,
      role: UserRole.TEAM_MEMBER,
      status: UserStatus.ACTIVE,
      emailVerified: true,
    });

    return {
      user: this.usersService.sanitizeUser(user),
      message: 'User registered successfully',
    };
  }

  async login(
    dto: LoginDto,
    userAgent?: string,
    ipAddress?: string,
  ): Promise<{ accessToken: string; refreshToken: string; user: SafeUser }> {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (user.status === UserStatus.SUSPENDED || user.status === UserStatus.DEACTIVATED) {
      throw new ForbiddenException('Your account has been suspended or deactivated');
    }

    const isPasswordValid = await comparePassword(dto.password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const rawRefreshToken = generateSecureToken();
    const tokenHash = sha256(rawRefreshToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const session = await this.prisma.session.create({
      data: {
        userId: user.id,
        refreshToken: rawRefreshToken,
        tokenHash,
        userAgent,
        ip: ipAddress,
        expiresAt,
      },
    });

    await this.usersService.update(user.id, {
      lastLoginAt: new Date(),
      lastLoginIp: ipAddress,
    });

    const accessToken = this.jwtService.sign({
      userId: user.id,
      email: user.email,
      role: user.role,
      sessionId: session.id,
    });

    return {
      accessToken,
      refreshToken: rawRefreshToken,
      user: this.usersService.sanitizeUser(user),
    };
  }

  async refresh(refreshToken: string): Promise<{ accessToken: string; refreshToken: string }> {
    const tokenHash = sha256(refreshToken);

    const session = await this.prisma.session.findFirst({
      where: {
        tokenHash,
        revokedAt: null,
      },
      include: {
        user: true,
      },
    });

    if (!session || session.expiresAt < new Date()) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    if (session.user.status === UserStatus.SUSPENDED || session.user.status === UserStatus.DEACTIVATED) {
      throw new ForbiddenException('Account suspended');
    }

    const newRefreshToken = generateSecureToken();
    const newTokenHash = sha256(newRefreshToken);
    const newExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await this.prisma.session.update({
      where: { id: session.id },
      data: {
        refreshToken: newRefreshToken,
        tokenHash: newTokenHash,
        expiresAt: newExpiresAt,
      },
    });

    const accessToken = this.jwtService.sign({
      userId: session.user.id,
      email: session.user.email,
      role: session.user.role,
      sessionId: session.id,
    });

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  }

  async logout(sessionId?: string, refreshToken?: string): Promise<void> {
    if (sessionId) {
      await this.prisma.session.updateMany({
        where: { id: sessionId },
        data: { revokedAt: new Date() },
      });
    } else if (refreshToken) {
      const tokenHash = sha256(refreshToken);
      await this.prisma.session.updateMany({
        where: { tokenHash },
        data: { revokedAt: new Date() },
      });
    }
  }

  async getCurrentUser(userId: string): Promise<SafeUser> {
    const user = await this.usersService.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.usersService.sanitizeUser(user);
  }

  async forgotPassword(dto: ForgotPasswordDto): Promise<{ message: string }> {
    const user = await this.usersService.findByEmail(dto.email);
    if (user) {
      const resetToken = generateSecureToken();
      const tokenHash = sha256(resetToken);
      const tokenExpiry = new Date(Date.now() + 60 * 60 * 1000);

      await this.usersService.update(user.id, {
        passwordResetToken: tokenHash,
        passwordResetExpiry: tokenExpiry,
      });
    }

    return {
      message: 'If an account with that email exists, a password reset link has been sent.',
    };
  }

  async resetPassword(dto: ResetPasswordDto): Promise<{ message: string }> {
    const tokenHash = sha256(dto.token);

    const user = await this.prisma.user.findFirst({
      where: {
        passwordResetToken: tokenHash,
        passwordResetExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw new BadRequestException('Invalid or expired password reset token');
    }

    const newPasswordHash = await hashPassword(dto.newPassword);

    await this.usersService.update(user.id, {
      passwordHash: newPasswordHash,
      passwordResetToken: null,
      passwordResetExpiry: null,
    });

    await this.prisma.session.updateMany({
      where: { userId: user.id, revokedAt: null },
      data: { revokedAt: new Date() },
    });

    return { message: 'Password has been successfully reset. Please log in with your new password.' };
  }
}
