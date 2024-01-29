import { TShoes } from './shoes.interface';
import { ShoesModel } from './shoes.model';

const createShoesIntoDB = async (shoes: TShoes) => {
  const result = await ShoesModel.create(shoes);
  return result;
};

const getAllShoesFromDB = async () => {
  const result = await ShoesModel.find();
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
  updateShoesFromDB,
};
