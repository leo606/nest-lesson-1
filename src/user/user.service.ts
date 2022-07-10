import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  private users: User[] = [
    {
      id: 1,
      name: 'foo',
      lastName: 'bar',
      age: 12,
      technologies: ['java', 'javascript'],
    },
    {
      id: 2,
      name: 'abc',
      lastName: 'def',
      age: 13,
      technologies: ['mysql', 'javascript'],
    },
  ];

  findAll(): Promise<User[]> {
    return this.userRepository.find();
    // return this.users;
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
