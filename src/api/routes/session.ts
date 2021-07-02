import { Router } from "express";
import jwt from "jsonwebtoken";
import config from "../../config";

const {
  session: { password },
} = config;
const users = [{ id: 1, email: "paulo@mesquita.dev", password: "PauloLuiz" }];

export const sessionRoute = (app: Router): Router => {
  const route: Router = Router();

  app.use("/session", route);

  route.post("/login", (req, res) => {
    const data = req.body;
    const user = users.filter(
      (user) => user.email === data.email && user.password === data.password
    );
    if (user.length > 0) {
      return res.json({ token: jwt.sign({ user }, password) });
    } else {
      res.status(403).json({ ok: false });
    }
  });

  return route;
};
