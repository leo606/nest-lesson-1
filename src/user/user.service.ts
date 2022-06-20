import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'foo',
      lastName: 'bar',
      age: 12,
    },
    {
      id: 2,
      name: 'abc',
      lastName: 'def',
      age: 13,
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(createUserDto: any) {
    this.users.push(createUserDto);
  }

  update(id: number, updateUserDto: any) {
    const userToUptadeIndex = this.users.findIndex((user) => user.id === id);
    if (userToUptadeIndex >= 0) {
      this.users[userToUptadeIndex] = updateUserDto;
    }
  }

  remove(id: number) {
    const userToDeleteIndex = this.users.findIndex((user) => user.id === id);
    this.users.splice(userToDeleteIndex, 1);
  }
}
