import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TECHNOLOGY_REPOSITORY, USER_REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Technology } from './entities/technology.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,

    @Inject(TECHNOLOGY_REPOSITORY)
    private technologyRepository: Repository<Technology>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`user id ${id} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const technologies = await Promise.all(
      createUserDto.technologies.map((techName) =>
        this.preloadTechByName(techName),
      ),
    );

    const user = this.userRepository.create({
      ...createUserDto,
      technologies,
    });
    return await this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const technologies =
      updateUserDto.technologies &&
      (await Promise.all(
        updateUserDto.technologies.map((techName) =>
          this.preloadTechByName(techName),
        ),
      ));

    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
      technologies,
    });

    if (!user) {
      throw new NotFoundException(`user id ${id} not found`);
    }

    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`user id ${id} not found`);
    }

    return this.userRepository.remove(user);
  }

  private async preloadTechByName(name: string): Promise<Technology> {
    const tag = await this.technologyRepository.findOne({ where: { name } });
    return tag || this.technologyRepository.create({ name });
  }
}
