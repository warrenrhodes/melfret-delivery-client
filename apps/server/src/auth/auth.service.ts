import { User } from '@mel-services-logistiques/models';
import { Token, UserAuthData } from '@mel-services-logistiques/utils';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserTokenPayload } from '../server-interfaces/token-payload';
import { UsersService } from '../users/users.service';

@Injectable()
/**
 * The authentication service class.
 * @with_decorator
 */
export class AuthService {
  /**
   * Constructs a new [AuthService] with the injected service.
   */
  constructor(private usersService: UsersService,
    private jwtService: JwtService) { }

  /**
   * Validates the user data.
   * @param authData The provided user authentication information.
   * @returns The valid user if exist.
   */
  async validateUser(authData: UserAuthData): Promise<User | null> {
    const user = await this.usersService.findOne(authData.pseudo);

    // Todo: use bcrypt to encrypt the user password.
    if (user && user.password === authData.password) {
      return user;
    }
    return null;
  }

  /**
   * Authenticates the user information.
   * @param user The retrieved user.
   * @returns The token of the user
   */
  async authenticate(user: User): Promise<Token> {
    const userTokenPayload: UserTokenPayload = { id: user.id, pseudo: user.pseudo };
    return {
      access_token: this.jwtService.sign(userTokenPayload),
      expire_in: 3600
    };
  }
}
