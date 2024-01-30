/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { userRegistrationService } from './registration.service';

const createUserRegistration = async (req: Request, res: Response) => {
  try {
    const result = await userRegistrationService.createUserRegistrationIntoDB(
      req.body,
    );
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'User registered successfully',
      data: result,
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
export const userRegistrationController = {
  createUserRegistration,
};
