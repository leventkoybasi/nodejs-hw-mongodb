import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';
import { getAllContacts, getStudentsById } from './services/contacts.js';

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
  app.get('/contacts', async (req, res) => {
    try {
      const contacts = await getAllContacts();
      res.status(200).json({
        message: 'Contacts fetched successfully',
        status: 200,
        data: contacts,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

  app.get('/contacts/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const contact = await getStudentsById(id);
      if (!contact) {
        return res.status(404).json({ message: 'Contact not found' });
      }
      res.status(200).json({
        message: 'Contact fetched successfully',
        status: 200,
        data: contact,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

  app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
