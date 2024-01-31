const userRole = {
  user: 'user',
} as const;

export type TUserRole = keyof typeof userRole;
