/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface TUserRegistration {
  userName: string;
  email: string;
  password: string;
  role: string;
}

export interface UserRegisterModel extends Model<TUserRegistration> {
  isUserExistByUserName(userNamae: string): Promise<TUserRegistration>;
  isPasswordMatch(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  //   storePassword(
  //     email: string,
  //     carPassword: string,
  //     // newPassword: string,
  //     timestamp: Date,
  //   ): Promise<boolean>;
}
