import { Express } from 'express';
import { expressLoader } from './express';

export const loaders = (app: Express): void => {
  expressLoader(app);
};
