/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { TUserRegistration, UserRegisterModel } from './registration.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const registrationSchema = new Schema<TUserRegistration, UserRegisterModel>({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

registrationSchema.pre('save', async function (next) {
  const userRegister = this;
  userRegister.password = await bcrypt.hash(
    userRegister.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

registrationSchema.statics.isUserExistByUsername = async function (
  userName: string,
) {
  return await RegistrationModel.findOne({
    userName,
  });
};

registrationSchema.statics.isPasswordMatch = async function (
  plainPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const RegistrationModel = model<TUserRegistration, UserRegisterModel>(
  'Registration',
  registrationSchema,
);
