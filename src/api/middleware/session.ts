import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../../services/session';

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
  const verifiedToken = verifyToken(authorizationField);
  if (!verifiedToken) {
    res
      .status(401)
      .json({ auth: false, message: 'Failed to authenticate token.' });
  } else if (typeof verifiedToken !== 'boolean') {
    req.user = verifiedToken;
    next();
  }
};
