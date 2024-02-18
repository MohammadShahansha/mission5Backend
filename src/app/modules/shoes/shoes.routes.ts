import express from 'express';
import { shoesControllers } from './shoes.controller';
// import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { shoesValidation } from './shoes.validation';
const router = express.Router();

router.post(
  '/create-shoes',
  validateRequest(shoesValidation.shoesValidationSchema),
  shoesControllers.createShoes,
);
// router.get('/get-shoes', auth('user'), shoesControllers.getAllShoes);
router.get('/get-shoes', shoesControllers.getAllShoes);
router.put('/update-shoe/:_id', shoesControllers.updateShoes);
router.delete('/delete-shoe/:_id', shoesControllers.deletelShoes);
// router.get('/categories', categoryController.getAllCategory);

export const shoesRoutes = router;
