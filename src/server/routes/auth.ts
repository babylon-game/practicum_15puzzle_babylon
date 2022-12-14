import { Router } from 'express';

import Urls from '../utils/constants';

import { validateLoginData, validateRegistrData } from '../utils/validator';
import {
  signupUser,
  signinUser,
  getUsers,
  getUser,
} from '../controllers/user';

const router = Router();

router.post(
  Urls.API.AUTH.SIGNUP,
  validateRegistrData,
  signupUser,
);

router.get(
  Urls.API.USERS.INDEX,
  getUsers,
);

router.get(
  Urls.API.USERS.GET,
  getUser,
);

router.post(
  Urls.API.AUTH.SIGNIN,
  validateLoginData,
  signinUser,
);

export default router;
