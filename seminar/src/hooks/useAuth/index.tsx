import { useEffect } from "react";
import UseApi from "../useApi";
import { userSelectors } from "../../store/user/selector";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../store/user";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_URL } from "../../constants/global";

export const useAuth = () => {
  const { apiCall } = UseApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(userSelectors.token);

  const onGetUserDataSuccess = (res: any) => {
    dispatch(setUserInfo(res.data));
    navigate("/");
  };

  const getUserData = () => {
    const query = {};
    apiCall({
      url: ACCOUNT_URL.USER_ME,
      query,
      method: "get",
      successCallback: onGetUserDataSuccess,
    });
  };

  useEffect(() => {
    if (token.accessToken) getUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
};
