declare namespace Express {
  interface Request {
    user: Record<string, unknown> | string;
  }
}
