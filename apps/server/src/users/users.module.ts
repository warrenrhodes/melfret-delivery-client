import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
    providers: [UsersService],
    exports: [UsersService],
})
/**
 * The user module.
 * @with_decorator
 */
export class UsersModule { }
