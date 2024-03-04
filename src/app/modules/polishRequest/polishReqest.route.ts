import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { polishValidation } from './polishRequest.validation';
import { polishController } from './polishRequest.controller';
const router = express.Router();

router.post(
  '/create-polish-request',
  validateRequest(polishValidation.polishValidationSchema),
  polishController.createPolishRequest,
);
router.get('/get-polish-request', polishController.getAllPolishRequest);
export const polishRequest = router;
