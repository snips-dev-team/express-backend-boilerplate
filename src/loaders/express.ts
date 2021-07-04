import { json, Express } from 'express';
import cors from 'cors';
import config from '../config';
import { routes } from '../api';

const {
  api: { prefix },
} = config;

export const expressLoader = (app: Express): void => {
  if (!prefix) return;
  app.use(cors());
  app.use(json());
  app.use(prefix, routes());
};
