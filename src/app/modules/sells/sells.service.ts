import { TSells } from './sells.interface';
import { SellsModel } from './sells.model';

const createSellsHistoryIntoDB = async (sells: TSells) => {
  const result = await SellsModel.create(sells);
  return result;
};

const getAllSellsHistoryFromDB = async () => {
  const result = await SellsModel.find().populate('shoes');
  return result;
};

export const sellsService = {
  createSellsHistoryIntoDB,
  getAllSellsHistoryFromDB,
};
