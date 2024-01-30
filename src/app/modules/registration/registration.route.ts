import express from 'express';
import { userRegistrationController } from './registration.controller';
const router = express.Router();

router.post('/register', userRegistrationController.createUserRegistration);

export const registerRoutes = router;
