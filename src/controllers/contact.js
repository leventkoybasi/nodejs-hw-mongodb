import createHttpError from 'http-errors';
import {
  createContact,
  deleteContactById,
  getAllContacts,
  getStudentsById,
  updateContact,
} from '../services/contacts';

//GET
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

//POST

export const postContactController = async (req, res) => {
  const newContact = req.body;
  const createdContact = await createContact(newContact);

  res.status(201).send({
    message: 'Contact created successfully',
    status: 201,
    data: createdContact,
  });
};

//PATCH
export const patchContactController = async (req, res) => {
  const { contactId } = req.params;
  const newFields = req.body;

  const updatedContact = await updateContact(contactId, newFields, {
    upsert: false,
  });

  if (!updatedContact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).send({
    message: 'Contact updated successfully',
    status: 200,
    data: updatedContact.contact,
  });
};

//DELETE

export const deleteContactController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await deleteContactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).send({
    message: 'Contact deleted successfully',
    status: 200,
    data: contact,
  });
};
