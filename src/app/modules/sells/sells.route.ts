import express from 'express';
import { sellsController } from './sells.controller';
import validateRequest from '../../middlewares/validateRequest';
import { sellsValidationSchema } from './sells.validation';
const router = express.Router();

router.post(
  '/create-sells-history',
  validateRequest(sellsValidationSchema),
  sellsController.createSellsHistory,
);
router.get('/get-sells-history', sellsController.getAllSellsHistory);
export const sellsRoutes = router;
