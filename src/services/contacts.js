import { SORT_ORDER } from '../constant/constantContact.js';
import { ContactsCollection } from '../db/model/contactSchema.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = '_id',
  sortOrder = SORT_ORDER.ASC,
}) => {
  const contactQuerry = ContactsCollection.find();

  const totalCount = await ContactsCollection.find().countDocuments();

  const contacts = await contactQuerry
    .skip((page - 1) * perPage)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const pagination = calculatePaginationData(totalCount, page, perPage);
  return {
    data: contacts,
    ...pagination,
  };
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

export const deleteContactById = async (id) => {
  const contact = await ContactsCollection.findByIdAndDelete(id);
  return contact;
};
