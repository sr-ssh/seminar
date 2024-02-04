import { ACCOUNT_URL, CORE_URL } from "../../constants/global";

export const getNonAuthorizedApis = (url: string) => {
  console.log(url, ACCOUNT_URL.AUTH_LOGIN + "/")
  return (
    url === ACCOUNT_URL.AUTH_REGISTER + "/" ||
    url === ACCOUNT_URL.AUTH_LOGIN + "/" ||
    url === ACCOUNT_URL.AUTH_RESEND + "/" ||
    url === ACCOUNT_URL.AUTH_VERIFY + "/" ||
    url === CORE_URL.AREAS + "/" ||
    url === CORE_URL.FIELDS + "/"
  );
};
