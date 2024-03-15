import { z } from 'zod';

const shoesValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    id: z.string(),
    price: z.number(),
    quantity: z.number(),
    releaseDate: z.string(),
    brand: z.string(),
    model: z.string(),
    style: z.string(),
    size: z.string(),
    color: z.string(),
    shoesImage: z.string(),
  }),
});
const UpdateShoesValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    id: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
    releaseDate: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    style: z.string().optional(),
    size: z.string().optional(),
    color: z.string().optional(),
    shoesImage: z.string().optional(),
  }),
});

export const shoesValidation = {
  shoesValidationSchema,
  UpdateShoesValidationSchema,
};
