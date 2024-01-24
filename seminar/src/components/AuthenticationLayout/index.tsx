import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store/user/selector";
import { useNavigate } from "react-router-dom";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector(userSelectors.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};

export default AuthenticationLayout;
