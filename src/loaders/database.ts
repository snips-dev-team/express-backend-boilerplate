import { createConnection } from 'typeorm';
import 'reflect-metadata';

export const databaseLoader = async (): Promise<void> => {
  await createConnection();
  console.log('Connected to database!');
};
