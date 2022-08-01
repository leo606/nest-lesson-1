import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  BeforeInsert,
  CreateDateColumn,
} from 'typeorm';
import { Technology } from './technology.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @BeforeInsert()
  generateUuid() {
    if (this.id) {
      return;
    }
    this.id = uuidv4();
  }
}
