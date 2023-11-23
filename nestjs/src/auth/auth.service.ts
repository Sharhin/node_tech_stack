import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PasswordService } from 'src/utils/password.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService
  ) { }

  async signIn(email: string, inputPassword: string): Promise<any> {
    const user = await this.usersService.findOneBy({ email });

    if (!user) {
      new UnauthorizedException();
    }

    const hashPassword = this.passwordService.generatePassword(inputPassword);

    if (user?.password !== hashPassword) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object

    return {
      access_token: await this.jwtService.signAsync({
        id: user.id
      }),
    };

    return result;
  }
}