/* eslint-disable @typescript-eslint/no-explicit-any */
import filter from '../../queryHelpers/filterQuery';
import { TShoes } from './shoes.interface';
import { ShoesModel } from './shoes.model';

const createShoesIntoDB = async (shoes: TShoes) => {
  const result = await ShoesModel.create(shoes);
  return result;
};

const getAllShoesFromDB = async (query: any) => {
  const filterQuery = filter(ShoesModel.find(), query);
  const result = await filterQuery.find();
  return result;
};
const deleteShoesFromDB = async (_id: string) => {
  const result = await ShoesModel.findByIdAndDelete(
    { _id },
    { isDeleted: true },
  );
  return result;
};

const updateShoesFromDB = async (_id: string, shoesData: TShoes) => {
  const result = await ShoesModel.findByIdAndUpdate({ _id }, shoesData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const shoesServices = {
  createShoesIntoDB,
  getAllShoesFromDB,
  deleteShoesFromDB,
  updateShoesFromDB,
};
