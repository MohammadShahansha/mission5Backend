import { z } from 'zod';

const registrationValidationSchema = z.object({
  userName: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
});

export const registrationValidatin = {
  registrationValidationSchema,
};
