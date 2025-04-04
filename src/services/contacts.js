import { ContactsCollection } from '../db/model/contactSchema.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getStudentsById = async (id) => {
  const contact = await ContactsCollection.findById(id);
  return contact;
};
