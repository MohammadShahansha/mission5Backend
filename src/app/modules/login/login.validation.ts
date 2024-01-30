import { z } from 'zod';
const userLoginValidationSchema = z.object({
  userName: z.string(),
  password: z.string(),
});

export const userLoginValidatin = {
  userLoginValidationSchema,
};
