import dotenv from 'dotenv';

dotenv.config();

const verifyEnvironmentVariable = (name: string): string => {
  const variable = process.env[name];
  if (!variable) throw `Missing environment variable ${name}`;
  return variable;
};

export default {
  application: {
    port: verifyEnvironmentVariable('PORT'),
  },
  api: {
    prefix: verifyEnvironmentVariable('API_PREFIX'),
  },
  session: {
    jwtPassword: verifyEnvironmentVariable('SESSION_PASSWORD'),
  },
  database: {
    url: verifyEnvironmentVariable('DATABASE_URL'),
    type: verifyEnvironmentVariable('DATABASE_TYPE'),
  },
};
