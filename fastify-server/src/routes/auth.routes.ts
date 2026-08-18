import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { AuthService } from '../services/auth.service';
import {
  registerSchema,
  loginSchema,
  refreshSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from '../schemas/auth.schema';

const authService = new AuthService();

export async function authRoutes(fastify: FastifyInstance, _opts: FastifyPluginOptions) {
  // Register
  fastify.post('/register', async (request: FastifyRequest, reply: FastifyReply) => {
    const parseResult = registerSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Validation error',
        issues: parseResult.error.format(),
      });
    }

    const result = await authService.register(parseResult.data);
    return reply.status(201).send(result);
  });

  // Login
  fastify.post('/login', async (request: FastifyRequest, reply: FastifyReply) => {
    const parseResult = loginSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Validation error',
        issues: parseResult.error.format(),
      });
    }

    const userAgent = request.headers['user-agent'];
    const ipAddress = request.ip;

    const result = await authService.login(parseResult.data, fastify, userAgent, ipAddress);

    // Set refresh token in httpOnly cookie
    reply.setCookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/api/v1/auth',
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    return reply.status(200).send({
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      user: result.user,
    });
  });

  // Refresh
  fastify.post('/refresh', async (request: FastifyRequest, reply: FastifyReply) => {
    const body = (request.body as any) || {};
    const cookieToken = request.cookies?.refreshToken;
    const refreshToken = cookieToken || body.refreshToken;

    if (!refreshToken) {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Refresh token is required in body or cookie',
      });
    }

    const result = await authService.refresh(refreshToken, fastify);

    reply.setCookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/api/v1/auth',
      maxAge: 7 * 24 * 60 * 60,
    });

    return reply.status(200).send(result);
  });

  // Logout (Authenticated or optional token)
  fastify.post('/logout', async (request: FastifyRequest, reply: FastifyReply) => {
    let sessionId: string | undefined;
    try {
      await request.jwtVerify();
      sessionId = request.user?.sessionId;
    } catch {
      // Ignore token expiry for logout
    }

    const cookieToken = request.cookies?.refreshToken;
    const bodyToken = (request.body as any)?.refreshToken;

    await authService.logout(sessionId, cookieToken || bodyToken);

    reply.clearCookie('refreshToken', { path: '/api/v1/auth' });
    return reply.status(200).send({ message: 'Logged out successfully' });
  });

  // Get Current User Profile (Authenticated)
  fastify.get(
    '/me',
    { onRequest: [fastify.authenticate] },
    async (request: FastifyRequest, reply: FastifyReply) => {
      const user = await authService.getCurrentUser(request.user.userId);
      return reply.status(200).send({ user });
    }
  );

  // Forgot Password
  fastify.post('/forgot-password', async (request: FastifyRequest, reply: FastifyReply) => {
    const parseResult = forgotPasswordSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Validation error',
        issues: parseResult.error.format(),
      });
    }

    const result = await authService.forgotPassword(parseResult.data);
    return reply.status(200).send(result);
  });

  // Reset Password
  fastify.post('/reset-password', async (request: FastifyRequest, reply: FastifyReply) => {
    const parseResult = resetPasswordSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'Validation error',
        issues: parseResult.error.format(),
      });
    }

    const result = await authService.resetPassword(parseResult.data);
    return reply.status(200).send(result);
  });
}
