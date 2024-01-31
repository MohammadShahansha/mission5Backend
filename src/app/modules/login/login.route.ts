import express from 'express';
import { loginController } from './login.controller';
const router = express.Router();

router.post('/login', loginController.userLogin);

export const loginRoutes = router;
