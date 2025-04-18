import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';
import contactRouter from './routers/contact.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import authRouter from './routers/auth.js';

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

  //Contact routes endpoints
  app.use('/contacts', contactRouter);
  app.use('/auth', authRouter);

  //Not Found Handle Middleware (404 error)
  app.use(notFoundHandler);

  //Error Handling Middleware
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
