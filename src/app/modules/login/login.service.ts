import config from '../../config';
import { RegistrationModel } from '../registration/registration.model';
import { TLogin } from './login.interface';
import jwt from 'jsonwebtoken';

const loginUser = async (payload: TLogin) => {
  const user = await RegistrationModel.isUserExistByUserName(payload?.userName);
  // const userInfo = await UserRegistration.find({
  //   username: payload?.username,
  // });
  if (!user) {
    throw new Error('user not exist ');
  }

  if (
    !(await RegistrationModel.isPasswordMatch(payload?.password, user.password))
  ) {
    throw new Error('password not matched');
  }

  const jswPayload = {
    // username: user.username,
    // password: user.password,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(jswPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });
  const result = {
    user,
    token,
  };

  return result;
};

export const loginService = {
  loginUser,
};
