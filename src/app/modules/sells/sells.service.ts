/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSells } from './sells.interface';
import { SellsModel } from './sells.model';

const createSellsHistoryIntoDB = async (sells: TSells) => {
  const result = await SellsModel.create(sells);
  return result;
};

// const getAllSellsHistoryFromDB = async () => {
//   const result = await SellsModel.find().populate('shoes');
//   return result;
// };
const getAllSellsHistoryFromDB = async (interval: any) => {
  let dateFilter = {};

  switch (interval) {
    case 'daily':
      dateFilter = {
        date: {
          $gte: new Date(new Date().setHours(0, 0, 0, 0)),
          $lte: new Date(),
        },
      };
      break;
    case 'weekly':
      dateFilter = {
        date: {
          $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
          $lte: new Date(),
        },
      };
      break;
    case 'monthly':
      dateFilter = {
        date: {
          $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
          $lte: new Date(),
        },
      };
      break;
    case 'yearly':
      dateFilter = {
        date: {
          $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
          $lte: new Date(),
        },
      };
      break;
    default:
      // Handle invalid interval
      // throw new Error('Invalid interval');
      break;
  }

  const result = await SellsModel.find(dateFilter).populate('shoes');
  return result;
};
const getAllSellsHistoryForBuyerFromDB = async () => {
  const result = await SellsModel.find().populate('shoes');
  return result;
};

export const sellsService = {
  createSellsHistoryIntoDB,
  getAllSellsHistoryFromDB,
  getAllSellsHistoryForBuyerFromDB,
};
