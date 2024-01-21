import { ACCOUNT_URL, CORE_URL } from "../../constants/global";

export const getNonAuthorizedApis = (url: string) => {

  return (
    url === ACCOUNT_URL.AUTH_REGISTER ||
    url === ACCOUNT_URL.AUTH_RESEND ||
    url === ACCOUNT_URL.AUTH_VERIFY ||
    url === CORE_URL.AREAS ||
    url === CORE_URL.FIELDS
  );
};
