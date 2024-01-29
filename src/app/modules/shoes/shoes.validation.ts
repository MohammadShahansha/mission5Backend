import { z } from 'zod';

const shoesValidationSchema = z.object({
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  releaseDate: z.string(),
  brand: z.string(),
  model: z.string(),
  style: z.string(),
  size: z.string(),
  color: z.string(),
});

export const shoesValidation = {
  shoesValidationSchema,
};
