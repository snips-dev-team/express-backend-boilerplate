import dotenv from 'dotenv';

dotenv.config();

export default {
  application: {
    port: process.env.PORT,
  },
  api: {
    prefix: process.env.API_PREFIX,
  },
  session: {
    password: process.env.SESSION_PASSWORD,
  },
  database: {
    url: process.env.DATABASE_URL,
    type: process.env.DATABASE_TYPE,
  },
};
