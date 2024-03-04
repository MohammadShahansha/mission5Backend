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
  const { interval } = req.query;
  const result = await sellsService.getAllSellsHistoryFromDB(interval);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Sells history retrived successfully',
    data: result,
  });
});
const getAllSellsHistoryForBuyer = catchAsync(async (req, res) => {
  const result = await sellsService.getAllSellsHistoryForBuyerFromDB();
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
  getAllSellsHistoryForBuyer,
};
