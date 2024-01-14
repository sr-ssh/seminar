import { getCurrentURL } from "../getCurrentURL";

export const getAuthorizationURL = () => {
  return getCurrentURL() === ("/login" || "otp" || "auth");
};
