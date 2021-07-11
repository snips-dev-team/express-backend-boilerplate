import { Router } from 'express';
import { login } from '../../services/session';

export const sessionRoute = (app: Router): Router | undefined => {
  const route: Router = Router();

  app.use('/session', route);

  route.post('/login', (req, res) => {
    const data = req.body;
    const { email, password } = data;
    if (!email || !password)
      return res
        .status(403)
        .json({ ok: false, message: 'You need to send email and password' });
    const token = login(email, password);
    if (typeof token === 'boolean') {
      return res
        .status(403)
        .json({ ok: false, message: 'Information doesnt match any user' });
    } else {
      return res.status(200).json({ ok: true, token });
    }
  });

  return route;
};
