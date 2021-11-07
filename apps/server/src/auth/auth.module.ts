import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({

    // Todo: use environment variable: github: https://github.com/pozzity/melfret-delivery-client/issues/43
    secret: jwtConstants.secret,

    // TODO: load the expiration date from environment variable.
    signOptions: { expiresIn: '3600s' },
  })],
  providers: [
    AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
/**
 * The authentication module.
 * @with_decorator
 */
export class AuthModule { }
