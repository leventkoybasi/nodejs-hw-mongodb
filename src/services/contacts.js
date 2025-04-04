import { ContactsCollection } from '../db/model/contactSchema.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getStudentsById = async (id) => {
  const contact = await ContactsCollection.findById(id);
  return contact;
};

export const createContact = async (contact) => {
  const newContact = await ContactsCollection.create(contact);
  return newContact;
};

export const updateContact = async (contactId, newFields, options = {}) => {
  const result = await ContactsCollection.findOneAndUpdate(
    {
      _id: contactId,
    },
    newFields,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (result.value) {
    return {
      contact: result.value,
      isNew: Boolean(result.lastErrorObject.upserted),
    };
  }
  return null;
};
