import { Area } from "./area";
import { Professor } from "./professor";
import { User } from "./user";

export interface Student {
  id: number;
  user: User;
  SID: number;
  supervisorGrade: number;
  teacherGrade: number;
  seminarClass: string;
  area: Area;
  supervisor: Professor;
}
