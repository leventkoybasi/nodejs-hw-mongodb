import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';

dotenv.config();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT;

export const setupServer = () => {
  const app = express();

  //Middleware  CORS
  app.use(cors());
  //Middleware to parse JSON request bodies
  app.use(express.json());
  // Middleware to PINO
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.status(200).type('text').send('Hello Levent KOYBASI');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
