import { User } from '@mel-services-logistiques/models';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
/**
 * A custom local strategy for our application.
 * @with_decorator
 */
export class LocalStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructs a new [LocalStrategy].
   */
  constructor(private authService: AuthService) {
    super({
      usernameField: 'pseudo',
      passwordField: 'password'
    });
  }

  /**
   * Validates the given user.
   * @param pseudo the uniques identifier of the user.
   * @param password provided user password.
   * @returns The validated user if exist.
   */
  async validate(pseudo: string, password: string): Promise<User> {
    const user = await this.authService.validateUser({ pseudo, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}