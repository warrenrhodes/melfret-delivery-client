
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
/**
 * The custom JWT auth guard.
 * @with_decorator
 */
export class JwtAuthGuard extends AuthGuard('jwt') { }
