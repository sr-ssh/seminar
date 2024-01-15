export const BASE_URL = 'https://api.seminar.arkamond.com/api'

const ACCOUNT_BASE = BASE_URL + "/account"
export const ACCOUNT_URL = {
  AUTH_LOGIN: ACCOUNT_BASE + "/auth/login",
  AUTH_LOGOUT: ACCOUNT_BASE + "/auth/logout",
  AUTH_REFRESH: ACCOUNT_BASE + "/auth/logout",
  AUTH_REGISTER: ACCOUNT_BASE + "/auth/register",
  AUTH_RESEND: ACCOUNT_BASE + "/auth/resend",
  AUTH_VERIFY: ACCOUNT_BASE + "/auth/verify_code",
  USER: ACCOUNT_BASE + "/user",
  USER_ME: ACCOUNT_BASE + "/user/me",
  USER_AVATAR: ACCOUNT_BASE + "/user/set_avatar",
}

const CORE_BASE = BASE_URL + "/core"
export const CORE_URL = {
  AREAS: CORE_BASE + "/areas",
  ATTACHMENT: CORE_BASE + "/attachment",
  DEFAULT_AREA_TAGS: CORE_BASE + "/default_area_tags",
  FIELDS: CORE_BASE + "/fields",
  TAGS: CORE_BASE + "/tags",
}

const UNIVERSITY_BASE = BASE_URL + "/university"
export const UNIVERSITY_URL = {
  COUNTRY: UNIVERSITY_BASE + "/country",
  PROFESSOR: UNIVERSITY_BASE + "/professor",
  REGISTEREDTHESIS: UNIVERSITY_BASE + "/registeredThesis",
  SEMINAR_CLASS: UNIVERSITY_BASE + "/seminar_class",
  THESIS: UNIVERSITY_BASE + "/thesis",
  UNIVERSITY: UNIVERSITY_BASE + "/university",
}