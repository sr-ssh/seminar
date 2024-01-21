import { University } from "./university";
import { User } from "./user";

export interface Professor {
  id: number;
  createdAt: string;
  user: User;
  university: University;
}
