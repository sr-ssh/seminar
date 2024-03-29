import { MenuItem } from "../hooks/useGlobalLocales/GlobalLocalesType";

export const BASE_URL = "https://api.seminar.arkamond.com/api";

const ACCOUNT_BASE = BASE_URL + "/account";
export const ACCOUNT_URL = {
  AUTH_LOGIN: ACCOUNT_BASE + "/auth/login/",
  AUTH_LOGOUT: ACCOUNT_BASE + "/auth/logout/",
  AUTH_REFRESH: ACCOUNT_BASE + "/auth/logout",
  AUTH_REGISTER: ACCOUNT_BASE + "/auth/register",
  AUTH_RESEND: ACCOUNT_BASE + "/auth/resend",
  AUTH_VERIFY: ACCOUNT_BASE + "/auth/verify_code",
  USER: ACCOUNT_BASE + "/user",
  USER_ME: ACCOUNT_BASE + "/user/me/",
  USER_AVATAR: ACCOUNT_BASE + "/user/set_avatar",
  STUDENTS: ACCOUNT_BASE + "/student",
  STUDENT_DETAILS: ACCOUNT_BASE + "/student",
  STUDENT_UPDATE_ME: ACCOUNT_BASE + "/student/update_me/"
};

const CORE_BASE = BASE_URL + "/core";
export const CORE_URL = {
  AREAS: CORE_BASE + "/areas",
  ATTACHMENT: CORE_BASE + "/attachment",
  DEFAULT_AREA_TAGS: CORE_BASE + "/default_area_tags",
  FIELDS: CORE_BASE + "/fields",
  TAGS: CORE_BASE + "/tags",
};

const UNIVERSITY_BASE = BASE_URL + "/university";
export const UNIVERSITY_URL = {
  COUNTRY: UNIVERSITY_BASE + "/country",
  PROFESSOR: UNIVERSITY_BASE + "/professor",
  PROFESSOR_BY_NAME: UNIVERSITY_BASE + "/professor?user__last_name__icontains=",
  REGISTEREDTHESIS: UNIVERSITY_BASE + "/registeredThesis",
  SEMINAR_CLASS: UNIVERSITY_BASE + "/seminar_class",
  SEMINAR_CLASS_BY_CODE: UNIVERSITY_BASE + "/seminar_class?code=",
  THESIS: UNIVERSITY_BASE + "/thesis",
  THESIS_REGISTER: UNIVERSITY_BASE + "/thesis/register",
  THESIS_SEARCH: UNIVERSITY_BASE + "/thesis?title__icontains=",
  UNIVERSITY: UNIVERSITY_BASE + "/university",
};

export const initUniversity = {
  id: 0,
  country: 0,
  title: "",
};

export const initArea = {
  field: 0,
  id: 0,
  title: "",
};

export const initAgent = {
  id: 0,
  university: 0,
  user: 0,
  createdAt: "",
};
export const initUser = {
  id: 0,
  firstName: "",
  lastName: "",
  avatar: "",
  dateJoined: "",
  isActive: false,
  isManager: false,
  isStaff: false,
  isSuperuser: false,
  lastLogin: "",
  username: "",
  email: "",
  groups: [""],
  permissions: [""],
  type: 0,
};

export const initProfessor = {
  id: 0,
  createdAt: "",
  user: initUser,
  university: initUniversity,
};

export const initClass = {
  id: 0,
  code: "",
  requiredThesis: [],
  tags: [],
  teacher: 0,
  registrationType: 0,
  university: 0,
  area: initArea,
  membersCount: 0,
  title: "",
  year: 0,
};

export const initStudent = {
  id: 0,
  user: initUser,
  SID: 0,
  supervisorGrade: 0,
  teacherGrade: 0,
  seminarClass: initClass,
  area: initArea,
  supervisor: initProfessor,
  entranceYear: "",
};

export const initThesis = {
  id: 0,
  createdAt: "",
  title: "",
  student: "",
  capacity: "",
  reservedCapacity: "",
  area: initArea,
  agent: initAgent,
  supervisors: [initProfessor],
  advisors: [initProfessor],
  interJudges: [initProfessor],
  externalJudges: [initProfessor],
  tags: [],
};

export const initRegisteredThesis =
{
  "id": 0,
  "thesis": initThesis,
  "status": 0,
}


export const StudentMenuItem: MenuItem[] = [
  { title: "انتخاب استاد راهنما و کلاس سمینار", link: "/" },
  { title: "جلسات دفاع", link: "/thesis" },
  { title: "جلسات ثبت نام شده", link: "/registered-thesis" },
];
