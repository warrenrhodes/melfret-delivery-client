
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserTokenPayload } from '../server-interfaces/token-payload';
import { jwtConstants } from './constants';

@Injectable()
/**
 * A custom jwt strategy for our application.
 * @with_decorator
 */
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructs a new [JwtStrategy].
   */
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,

      // PEM-encoded public key, may be more appropriate for production apps. https://github.com/mikenicholson/passport-jwt#configure-strategy
      secretOrKey: jwtConstants.secret,
    });
  }

  /**
   * Validates the given user.
   * @param payload retrieved payload after validation.
   * @returns The validated user if exist.
   */
  async validate(payload: { id: string | undefined; pseudo: string | undefined }): Promise<UserTokenPayload> {
    Logger.log(JSON.stringify(payload));

    /// Todo: verify if the user exist in the database.
    if (!payload.pseudo || !payload.id) {
      throw new UnauthorizedException();
    }
    return { id: payload.id, pseudo: payload.pseudo };
  }
}