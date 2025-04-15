import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper';
import {
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
  postContactController,
} from '../controllers/contact';
import { isValidId } from '../middlewares/isValidId';
import { validateBody } from '../middlewares/validatorBody';
import {
  createContactSchema,
  updateContactSchema,
} from '../validators/contact';

const contactRouter = Router();

//Contact routes endpoints
contactRouter.get('/', ctrlWrapper(getContactsController));
contactRouter.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);
contactRouter.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(postContactController),
);
contactRouter.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);
contactRouter.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default contactRouter;
