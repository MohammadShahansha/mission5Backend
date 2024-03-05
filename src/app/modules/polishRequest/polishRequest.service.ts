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
const updatePolishRequestFromDB = async (
  _id: string,
  polishData: TPolishRequest,
) => {
  const result = await polishRequestModel.findByIdAndUpdate(
    { _id },
    polishData,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

export const polishService = {
  createPolishRequestIntoDB,
  getAllPolishRequestFromDB,
  updatePolishRequestFromDB,
};
