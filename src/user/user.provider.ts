import {
  DATA_SOURCE,
  TECHNOLOGY_REPOSITORY,
  USER_REPOSITORY,
} from 'src/constants';
import { DataSource } from 'typeorm';
import { Technology } from './entities/technology.entity';
import { User } from './entities/user.entity';

export const userProvider = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
  {
    provide: TECHNOLOGY_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Technology),
    inject: [DATA_SOURCE],
  },
];
