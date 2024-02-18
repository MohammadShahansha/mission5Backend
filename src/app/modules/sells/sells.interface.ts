import { Types } from 'mongoose';

export type TSells = {
  quantity: number;
  buyer: string;
  date: Date;
  shoes: Types.ObjectId;
};
