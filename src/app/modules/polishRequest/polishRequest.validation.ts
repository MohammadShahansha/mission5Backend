import { z } from 'zod';

const polishValidationSchema = z.object({
  body: z.object({
    status: z.string(),
    requestedProduct: z.string(),
  }),
});
const updatedPolishValidationSchema = z.object({
  body: z.object({
    status: z.string().optional(),
    requestedProduct: z.string(),
  }),
});

export const polishValidation = {
  polishValidationSchema,
  updatedPolishValidationSchema,
};
