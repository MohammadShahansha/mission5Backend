import { z } from 'zod';

export const sellsValidationSchema = z.object({
  body: z.object({
    quantity: z.number(),
    buyer: z.string(),
    date: z.string(),
    shoes: z.string(),
  }),
});
