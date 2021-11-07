import { User } from '@mel-services-logistiques/models';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';


@Controller('/api')
/**
 * The main entry point of our application.
 * @with_decorator
 */
export class AppController {

  /**
   * Constructs a new {AppController}.
   */
  constructor(private readonly authService: AuthService) { }

  /**
   * The login route.
   * @param req The provided request.
   * @returns The access token if the requested user exist.
   */
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req: Request): Promise<unknown> {
    return this.authService.authenticate(req.user as User);
  }

  /**
   * The route used to retrieve user profile.
   * @param req the provided request.
   * @returns The requested user data.
   */
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request): User {
    return req.user as User;
  }
}
