import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper';
import {
  getContactByIdController,
  getContactsController,
} from '../controllers/contact';

const contactRouter = Router();

//Contact routes endpoints
contactRouter.get('/', ctrlWrapper(getContactsController));
contactRouter.get('/:contactId', ctrlWrapper(getContactByIdController));

export default contactRouter;
