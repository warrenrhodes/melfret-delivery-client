import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from '@mel-services-logistiques/models';

describe('UsersService', () => {
  let userService: UsersService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should find one user', async () => {
    const user: User | undefined = await userService.findOne('admin_zero');
    expect(user).toBeDefined();
    expect(user.pseudo).toBe('admin_zero');
  });
  
  it('should not find user', async () => {
    const user: User | null = await userService.findOne('not_exist_admin');
    expect(user).toBeNull();
  });
});
