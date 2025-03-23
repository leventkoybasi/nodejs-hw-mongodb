import { ContactsCollection } from '../db/model/contactSchema.js';

export const getAllContacts = async () => {
  try {
    const contacts = await ContactsCollection.find();
    return contacts;
  } catch (error) {
    console.error('getAllContacts: error has occured!', error);
  }
};

export const getStudentsById = async (id) => {
  const contact = await ContactsCollection.findById(id);
  return contact;
};
