import { Area } from "./area";
import { Class } from "./class";
import { Professor } from "./professor";
import { User } from "./user";

export interface Student {
  id: number;
  user: User;
  SID: number;
  supervisorGrade: number;
  teacherGrade: number;
  seminarClass: Class;
  area: Area;
  supervisor: Professor;
  entranceYear: string;
}
