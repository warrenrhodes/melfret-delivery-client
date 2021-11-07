import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';


describe('AuthService', () => {
  let authService: AuthService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, PassportModule, JwtModule.register({
        // Todo: use environment variable: github: https://github.com/pozzity/melfret-delivery-client/issues/43
        secret: jwtConstants.secret,

        // TODO: load the expiration date from environment variable.
        signOptions: { expiresIn: '3600s' },
      })],
      providers: [
        AuthService, LocalStrategy, JwtStrategy],
      exports: [AuthService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should return a valid admin user', () => {
    const validatedUser = authService.validateUser({ pseudo: 'admin_zero', password: 'Mel_Services@2021' });
    expect(validatedUser).toBeDefined();
  });

  it('should return an null user', async () => {
    const validatedUser = await authService.validateUser({ pseudo: 'unknown_admin', password: 'Mel_Services@2021' });
    expect(validatedUser).toBeNull();
  });
});
