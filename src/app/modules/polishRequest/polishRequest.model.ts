import { Schema, model } from 'mongoose';
import { TPolishRequest } from './polishRequest.inteface';

const polishRequestSchema = new Schema<TPolishRequest>({
  status: {
    type: String,
    required: true,
  },
  requestedProduct: {
    type: Schema.Types.ObjectId,
    ref: 'sell',
  },
});

export const polishRequestModel = model<TPolishRequest>(
  'polishRequest',
  polishRequestSchema,
);
