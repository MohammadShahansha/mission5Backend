import { TPolishRequest } from './polishRequest.inteface';
import { polishRequestModel } from './polishRequest.model';

const createPolishRequestIntoDB = async (polishRequest: TPolishRequest) => {
  const result = await polishRequestModel.create(polishRequest);
  return result;
};

const getAllPolishRequestFromDB = async () => {
  const result = await polishRequestModel.find().populate({
    path: 'requestedProduct',
    populate: {
      path: 'shoes',
    },
  });
  return result;
};

export const polishService = {
  createPolishRequestIntoDB,
  getAllPolishRequestFromDB,
};
