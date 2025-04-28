import createHttpError from 'http-errors';
import {
  createContact,
  deleteContactById,
  getAllContacts,
  getStudentsById,
  updateContact,
} from '../services/contacts';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

//GET
export const getContactsController = async (req, res) => {
  const queryParams = req.query;
  const { page, perPage } = parsePaginationParams(queryParams);
  const { sortBy, sortOrder } = parseSortParams(queryParams);
  const filter = parseFilterParams(queryParams);

  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId: req.user._id,
  });
  console.log('CONTACTS :', contacts);

  res.status(200).send({
    message: 'Contacts fetched successfully',
    status: 200,
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
  const newContact = {
    ...req.body,
    userId: req.user._id,
  };
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
