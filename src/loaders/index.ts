import { Express } from 'express';
import { expressLoader } from './express';
import { databaseLoader } from './database';

export const loaders = async (app: Express): Promise<void> => {
  await databaseLoader();
  expressLoader(app);
};
