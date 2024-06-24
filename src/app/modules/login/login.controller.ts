import { Request, Response } from 'express';
import { loginService } from './login.service';

/* eslint-disable @typescript-eslint/no-explicit-any */
const userLogin = async (req: Request, res: Response) => {
  res.header(
    'Access-Control-Allow-Origin',
    // 'https://warm-shortbread-0db074.netlify.app',
    'http://localhost:5173',
  );
  try {
    const result = await loginService.loginUser(req.body);
    res.status(201).json({
      success: true,
      statusCode: 200,
      message: 'User login successful',
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

export const loginController = {
  userLogin,
};
