import catchAsync from '../../utils/catchAsinc';
import { sellsService } from './sells.service';

const createSellsHistory = catchAsync(async (req, res) => {
  const result = await sellsService.createSellsHistoryIntoDB(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Product selled successfully',
    data: result,
  });
});

const getAllSellsHistory = catchAsync(async (req, res) => {
  const result = await sellsService.getAllSellsHistoryFromDB();
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Sells history retrived successfully',
    data: result,
  });
});
export const sellsController = {
  createSellsHistory,
  getAllSellsHistory,
};
