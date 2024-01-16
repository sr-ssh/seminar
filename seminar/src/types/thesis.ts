export interface Thesis {
  id: number;
  createdAt: string;
  title: string;
  student: string;
  capacity: string;
  reservedCapacity: string;
  area: string;
  agent: number;
  supervisors: number[];
  advisors: number[];
  interJudges: number[];
  externalJudges: number[];
  tags: string[];
}
