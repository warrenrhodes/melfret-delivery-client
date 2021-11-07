
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
/**
 * The custom local auth guard.
 * @with_decorator
 */
export class LocalAuthGuard extends AuthGuard('local') { }