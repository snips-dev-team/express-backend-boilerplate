import config from '../config';

const { database } = config;

export default {
  ...database,
  synchronize: true,
  logging: false,
  entities: ['src/database/entities/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
};
