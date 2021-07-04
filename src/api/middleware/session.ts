import jwt from 'jsonwebtoken';
import config from '../../config';
import { Request, Response, NextFunction } from 'express';

const {
  session: { password },
} = config;

// Verify authentication
export const sessionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorizationField = req.headers['authorization'];

  if (!authorizationField) {
    res.status(401).json({
      error: true,
      message: 'No token provided.',
      result: 'You need to send a token',
    });
    return;
  }
  if (!password) return;
  const token = authorizationField.split('Bearer ')[1];
  try {
    const data = jwt.verify(token, password);
    req.user = data;
    next();
  } catch {
    res
      .status(401)
      .json({ auth: false, message: 'Failed to authenticate token.' });
  }
};
