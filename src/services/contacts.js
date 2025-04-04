import { ContactsCollection } from '../db/model/contactSchema.js';

export const getAllContacts = async () => {
  try {
    const contacts = await ContactsCollection.find();
    return contacts;
  } catch (error) {
    console.error('getAllContacts: error has occured!', error);
    throw error;
  }
};

export const getStudentsById = async (id) => {
  try {
    const contact = await ContactsCollection.findById(id);
    return contact;
  } catch (error) {
    console.error('getStudentsById: error has occured!', error);
    throw error;
  }
};
