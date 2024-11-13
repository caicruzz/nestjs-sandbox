import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    console.log('creating user', createUserDto);
  }

  findAll() {
    const users = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'jonh@john.com',
      },
    ];
    return users;
  }
}
