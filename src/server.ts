import express from 'express';
import config from './config';
import { loaders } from './loaders';

const {
  application: { port },
} = config;

const start = async () => {
  const app = express();
  await loaders(app);
  app.listen(port, () => console.log(`Running on port ${port}`));
};

start();
