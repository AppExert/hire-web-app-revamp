export interface User {
  id: number;
  uniqueId: string;
  email: string;
  firstName: string;
  lastName: null;
  phone: null;
  image: null;
  role: Role;
  roles: string[];
}

export interface Role {
  id: number;
  name: string
  label: string;
  description: string;
}

export interface RoutePermissions {
  roles: (keyof typeof ROLE_TYPE)[];
  permissions?: string[];
}

export const ROLE_TYPE = {
  SUPER_ADMIN: 1,
  DEVELOPER: 2,
  COMPANY: 3
};

