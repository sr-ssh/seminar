import { Thesis } from "./thesis";

export interface Class {
  id: number;
  code: string;
  requiredThesis: Thesis[];
  tags: string[];
  teacher: number;
  registrationType: number;
  university: number;
}
