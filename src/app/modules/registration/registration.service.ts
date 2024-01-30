import { TUserRegistration } from './registration.interface';
import { RegistrationModel } from './registration.model';

const createUserRegistrationIntoDB = async (
  userRegistration: TUserRegistration,
) => {
  const isExistEmail = await RegistrationModel.findOne({
    email: userRegistration.email,
  });
  const isExistUserName = await RegistrationModel.findOne({
    userName: userRegistration.userName,
  });
  if (isExistEmail) {
    throw new Error('404 Email already exist');
  }
  if (isExistUserName) {
    throw new Error('404 user name Already Exitst');
  }
  const result = await RegistrationModel.create(userRegistration);
  return result;
};

export const userRegistrationService = {
  createUserRegistrationIntoDB,
};
