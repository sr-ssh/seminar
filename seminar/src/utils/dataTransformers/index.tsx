import { Student } from "../../types/student";
import { Professor } from "../../types/professor";
import { User } from "../../types/user";
import { Area } from "../../types/area";
import { Agent } from "../../types/agent";

export const areaTransformer = (data: any) => {
  return {
    id: data.id,
    title: data.title,
    field: data.field,
  } as Area;
};

export const agentTransformer = (data: any) => {
  return {
    id: data.id,
    university: data.university,
    user: data.user,
    createdAt: data.created_at,
  } as Agent;
};

export const studentTransformer = (data: any) => {
  return {
    id: data.id,
    user: userTransformer(data.user),
    SID: data.number,
    supervisorGrade: data.supervisor_grade,
    teacherGrade: data.teacher_grade,
    seminarClass: data.seminar_class,
    area: areaTransformer(data.area),
    supervisor: professorTransformer(data.supervisor),
  } as Student;
};

export const userTransformer = (data: any) => {
  return {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    avatar: data.avatar,
    dateJoined: data.date_joined,
    isActive: data.is_active,
    isManager: data.is_manager,
    isStaff: data.is_staff,
    isSuperuser: data.is_superuser,
    lastLogin: data.last_login,
    username: data.username,
    email: data.email,
    groups: data.groups,
    permissions: data.user_permissions,
    type: data.user_type,
  } as User;
};

export const professorTransformer = (data: any) => {
  return {
    id: data.id,
    createdAt: data.created_at,
    user: userTransformer(data.user),
    university: data.university,
  } as Professor;
};

export const thesisTransformer = (data: any) => {
  return {
    id: data.id,
    createdAt: data.created_at,
    title: data.title,
    student: data.student,
    capacity: data.capacity,
    reservedCapacity: data.reserved_capacity,
    area: areaTransformer(data.area),
    agent: agentTransformer(data.agent),
    supervisors: data.supervisors.map((item: any) =>
      professorTransformer(item),
    ),
    advisors: data.advisors.map((item: any) => professorTransformer(item)),
    interJudges: data.inter_judges.map((item: any) =>
      professorTransformer(item),
    ),
    externalJudges: data.external_judges.map((item: any) =>
      professorTransformer(item),
    ),
    tags: data.tags,
  };
};
