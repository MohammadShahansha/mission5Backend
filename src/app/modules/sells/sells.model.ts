import { Schema, model } from 'mongoose';
import { TSells } from './sells.interface';

const sellsSchema = new Schema<TSells>({
  quantity: {
    type: Number,
    required: true,
  },
  buyer: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  shoes: {
    type: Schema.Types.ObjectId,
    ref: 'Shoe',
  },
});
export const SellsModel = model<TSells>('sell', sellsSchema);
