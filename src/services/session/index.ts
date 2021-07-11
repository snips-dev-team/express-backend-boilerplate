import config from '../../config';
import jwt, { JwtPayload } from 'jsonwebtoken';

const {
  session: { jwtPassword },
} = config;

const users = [{ id: 1, email: 'paulo@mesquita.dev', password: 'PauloLuiz' }];

export const verifyToken = (tokenString: string): boolean | JwtPayload => {
  const token = tokenString.split('Bearer ')[1];
  try {
    const data = jwt.verify(token, jwtPassword);
    if (typeof data === 'string') return false;
    return data;
  } catch {
    return false;
  }
};

export const login = (email: string, password: string): boolean | string => {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) return false;
  return jwt.sign({ user }, jwtPassword);
};
