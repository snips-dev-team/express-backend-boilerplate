import config from './src/config';

const { database } = config;

export default {
  ...database,
  synchronize: true,
  logging: false,
  entities: ['src/database/entities/*.ts'],
  migrationsTableName: 'migrations',
};
