import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './user/entities/user.entity';

const POSTGRES_DATA: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => new DataSource(POSTGRES_DATA).initialize(),
  },
];
