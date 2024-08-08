export interface User {
  name: string;
  email: string;
  isActive: boolean;
  organizationId: string;
  avatar: string;
}

export const emptyUser: User = {
  name: "",
  email: "",
  isActive: false,
  organizationId: "",
  avatar: "",
};
