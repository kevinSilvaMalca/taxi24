import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgress: {
      db: process.env.POSTGRESS_DB,
      host: process.env.POSTGRESS_HOST,
      user: process.env.POSTGRESS_USER,
      pass: process.env.POSTGRESS_PASSWORD,
      port: parseInt(process.env.POSTGRESS_PORT, 10),
    },
  };
});
