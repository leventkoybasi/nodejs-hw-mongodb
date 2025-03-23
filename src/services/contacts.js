import { ContactsCollection } from '../db/model/contactSchema.js';

export const getAllContacts = async () => {
  try {
    const contacts = await ContactsCollection.find();
    console.log('Fetched contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('getAllContacts: error has occured!', error);
    throw error;
  }
};

export const getStudentsById = async (id) => {
  try {
    console.log(`Fetching contact with ID: ${id}`);
    const contact = await ContactsCollection.findById(id);
    return contact;
  } catch (error) {
    console.error('getStudentsById: error has occured!', error);
    throw error;
  }
};
