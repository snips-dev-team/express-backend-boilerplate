import express from 'express';
import config from './config';
import { loaders } from './loaders';

const {
  application: { port },
} = config;

const app = express();

loaders(app);

app.listen(port, () => console.log(`Running on port ${port}`));
