import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { v4 as uuidv4 } from 'uuid';
@Entity('technologies')
export class Technology {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => User, (course) => course.technologies)
  users: User[];

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
