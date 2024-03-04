import { Types } from 'mongoose';

export type TPolishRequest = {
  status: string;
  requestedProduct: Types.ObjectId;
};
