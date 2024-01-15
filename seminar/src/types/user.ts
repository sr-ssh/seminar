export interface User {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  dateJoined: string;
  isActive: boolean;
  isManager: boolean;
  isStaff: boolean;
  isSuperuser: boolean;
  lastLogin: string;
  username: string;
  email: string;
  groups: string[];
  permissions: string[];
  type: number;
}
