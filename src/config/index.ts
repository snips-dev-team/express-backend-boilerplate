import dotenv from "dotenv";

dotenv.config();

export default {
  application: {
    port: process.env.PORT,
  },
  api: {
    prefix: process.env.API_PREFIX,
  },
};
