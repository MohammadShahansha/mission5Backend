import { Request, Response } from 'express';
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
const updatePolishRequest = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const polishData = req.body;
    await polishService.updatePolishRequestFromDB(_id, polishData);
    res.status(200).json({
      success: true,
      message: 'Status updated successfully!',
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message || 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
export const polishController = {
  createPolishRequest,
  getAllPolishRequest,
  updatePolishRequest,
};
