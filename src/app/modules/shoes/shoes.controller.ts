/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { shoesServices } from './shoes.service';

const createShoes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await shoesServices.createShoesIntoDB(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Shoe created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllShoes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await shoesServices.getAllShoesFromDB(req.query);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Shoes retrived successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateShoes = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const shoesData = req.body;
    console.log(shoesData);
    await shoesServices.updateShoesFromDB(_id, shoesData);
    res.status(200).json({
      success: true,
      message: 'shoes updated successfully!',
      data: null,
    });
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
export const shoesControllers = {
  createShoes,
  getAllShoes,
  updateShoes,
};
