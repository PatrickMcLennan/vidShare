import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoginCredentialsDto } from './dto/login-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password, firstName, lastName } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const user = new User();

    user.email = email;
    user.password = await this.hashPassword(password, salt);
    user.firstName = firstName;
    user.lastName = lastName;
    user.salt = salt;

    try {
      await user.save();
    } catch (error) {
      if (error.code === `23505`)
        // Duplcate email
        throw new ConflictException(`${email} is already registered`);
      else throw new InternalServerErrorException();
    }
  }

  async validateUserPassword(
    loginCredentialsDto: LoginCredentialsDto,
  ): Promise<string> {
    const { email, password } = loginCredentialsDto;
    const user = await this.findOne({ email });

    if (user && (await user.validatePassword(password))) return user.email;
    else return null;
  }
}
