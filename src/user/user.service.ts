import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new HttpException(`user id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  create(createUserDto: any) {
    this.users.push(createUserDto);
  }

  update(id: number, updateUserDto: any) {
    const userToUptadeIndex = this.users.findIndex((user) => user.id === id);
    if (userToUptadeIndex <= 0) {
      throw new HttpException(`user id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    this.users[userToUptadeIndex] = updateUserDto;
  }

  remove(id: number) {
    const userToDeleteIndex = this.users.findIndex((user) => user.id === id);
    if (userToDeleteIndex <= 0) {
      throw new HttpException(`user id ${id} not found`, HttpStatus.NOT_FOUND);
    }
    this.users.splice(userToDeleteIndex, 1);
  }
}
