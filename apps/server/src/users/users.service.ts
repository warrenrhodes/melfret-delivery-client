import { User } from '@mel-services-logistiques/models';
import { Injectable } from '@nestjs/common';

@Injectable()
/**
 * The user repository for database access.
 * @with_decorator
 */
export class UsersService {
  private readonly users = [
    {
      id: 'XATRESDWEAEDATRGXQEDASSRS',
      pseudo: 'admin_zero',
      password: 'Mel_Services@2021',
      authMode: 'manual',
      full_name: 'Super Admin Mel Services Logisques',
      role: 'admin'
    }
  ];

  /**
   * Find an unique user on database.
   * @param pseudo the unique identifier of the user.
   * @returns The requested user if exist.
   */
  async findOne(pseudo: string): Promise<User | null> {
    const userInterface = this.users.find(user => user.pseudo == pseudo);
    if (!userInterface) return null;
    return Object.assign(new User(), userInterface);
  }
}