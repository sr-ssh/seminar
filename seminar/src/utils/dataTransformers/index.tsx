import { Student } from "../../types/student";
import { Professor } from "../../types/professor";
import { User } from "../../types/user";

export const studentTransformer = (data: any) => {
  return {
    id: data.id,
    user: userTransformer(data.user),
    SID: data.number,
    supervisorGrade: data.supervisor_grade,
    teacherGrade: data.teacher_grade,
    seminarClass: data.seminar_class,
    area: data.area,
    supervisor: supervisorTransformer(data.supervisor),
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

export const supervisorTransformer = (data: any) => {
  return {
    id: data.id,
    createdAt: data.created_at,
    user: data.user,
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
    area: data.area,
    agent: data.agent,
    supervisors: data.supervisors,
    advisors: data.advisors,
    interJudges: data.inter_judges,
    externalJudges: data.external_judges,
    tags: data.tags,
  };
};
