import { Router } from "express";
import { sessionMiddleware } from "../middleware/session";

export const healthCheckRoute = (app: Router): Router => {
  const route: Router = Router();

  app.use("/health_check", route);

  route.get("/", sessionMiddleware, (_, res) => {
    res.status(200).json({ ok: true });
  });

  return route;
};
