import createHttpError from 'http-errors';
import { getAllContacts, getStudentsById } from '../services/contacts';

export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).send({
    data: contacts,
  });
};

export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getStudentsById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).send({
    message: 'Contact found successfully',
    status: 200,
    data: contact,
  });
};
