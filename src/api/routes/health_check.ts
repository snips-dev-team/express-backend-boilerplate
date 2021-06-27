import { Router } from "express";
export const healthCheckRoute = (app: Router): Router => {
  const route: Router = Router();

  app.use("/health_check", route);

  route.get("/", (_, res) => {
    res.status(200).json({ ok: true });
  });

  return route;
};
