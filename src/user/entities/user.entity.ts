import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Technology } from './technology.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @JoinTable()
  @ManyToMany(() => Technology, (technology) => technology.users, {
    cascade: true,
  })
  technologies: Technology[];
}
