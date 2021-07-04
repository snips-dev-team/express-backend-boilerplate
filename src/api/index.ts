import { Router } from 'express';
import { healthCheckRoute } from './routes/health_check';
import { sessionRoute } from './routes/session';

export const routes = (): Router => {
  const router = Router();
  healthCheckRoute(router);
  sessionRoute(router);
  return router;
};
