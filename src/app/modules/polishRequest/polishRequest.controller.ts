import catchAsync from '../../utils/catchAsinc';
import { polishService } from './polishRequest.service';

const createPolishRequest = catchAsync(async (req, res) => {
  const result = await polishService.createPolishRequestIntoDB(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Requeste created successfully',
    data: result,
  });
});

const getAllPolishRequest = catchAsync(async (req, res) => {
  const result = await polishService.getAllPolishRequestFromDB();
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: 'Polish request retrived successfully',
    data: result,
  });
});
export const polishController = {
  createPolishRequest,
  getAllPolishRequest,
};
