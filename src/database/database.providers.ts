import 'dotenv/config';
import { DATA_SOURCE } from '../constants';
import { DataSource, DataSourceOptions } from 'typeorm';

const POSTGRES_DATA: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_URL,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
  synchronize: false,
};

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => new DataSource(POSTGRES_DATA).initialize(),
  },
];

export const dataSource = new DataSource(POSTGRES_DATA);
