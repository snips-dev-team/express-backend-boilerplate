import { Router } from "express";
import { healthCheckRoute } from "./routes/health_check";
export const routes = (): Router => {
  const router = Router();
  healthCheckRoute(router);
  return router;
};
