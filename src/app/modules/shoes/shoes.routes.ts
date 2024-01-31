import express from 'express';
import { shoesControllers } from './shoes.controller';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post('/create-shoes', shoesControllers.createShoes);
router.get('/get-shoes', auth('user'), shoesControllers.getAllShoes);
router.put('/update-shoe/:_id', shoesControllers.updateShoes);
// router.get('/categories', categoryController.getAllCategory);

export const shoesRoutes = router;
