import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper';
import {
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
  postContactController,
} from '../controllers/contact';

const contactRouter = Router();

//Contact routes endpoints
contactRouter.get('/', ctrlWrapper(getContactsController));
contactRouter.get('/:contactId', ctrlWrapper(getContactByIdController));
contactRouter.post('/', ctrlWrapper(postContactController));
contactRouter.patch('/:contactId', ctrlWrapper(patchContactController));
contactRouter.delete('/:contactId', ctrlWrapper(deleteContactController));

export default contactRouter;
