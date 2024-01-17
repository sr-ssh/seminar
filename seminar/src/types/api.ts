import { Thesis } from "./thesis";

export interface GetUniversityThesisResponse {
  num_of_pages?: number;
  count?: number
  data: Thesis[]
}