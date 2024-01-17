import { Agent } from "./agent";
import { Area } from "./area";
import { Professor } from "./professor";

export interface Thesis {
  id: number;
  createdAt: string;
  title: string;
  student: string;
  capacity: string;
  reservedCapacity: string;
  area: Area;
  agent: Agent;
  supervisors: Professor[];
  advisors: Professor[];
  interJudges: Professor[];
  externalJudges: Professor[];
  tags: string[];
}


export interface ThesisDetailType {
  id: number;
  createdAt: string;
  title: string;
  student: string;
  capacity: string;
  reservedCapacity: string;
  area: Area;
  agent: Agent;
  supervisors: Professor[];
  advisors: Professor[];
  interJudges: Professor[];
  externalJudges: Professor[];
  tags: { id?: string, title: string }[];
}
