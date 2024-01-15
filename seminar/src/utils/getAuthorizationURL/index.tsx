import { getCurrentURL } from "../getCurrentURL";

export const getAuthorizationURL = () => {
  const currentURL = getCurrentURL();
  return (
    currentURL === "/login" ||
    currentURL === "/otp" ||
    currentURL === "/register"
  );
};
