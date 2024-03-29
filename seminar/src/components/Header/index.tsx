import { Avatar, Box, Button, Typography, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { userSelectors } from "../../store/user/selector";
import { useDispatch, useSelector } from "react-redux";
import { TRANSLATIONS } from "./constants";
import { useNavigate } from "react-router-dom";
import { userClear } from "../../store/user";
import { tokenClear } from "../../store/user/token";
import UseApi from "../../hooks/useApi";
import { ACCOUNT_URL } from "../../constants/global";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  top: 0,
  right: 0,
  width: "100%",
  height: "72px",
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 32,
  paddingRight: 32,
  zIndex: 8,
  boxShadow:
    "0px 0px 1px 0px rgba(0, 0, 0, 0.40), 0px 6px 6px -6px rgba(0, 0, 0, 0.16)",
  backgroundColor: theme.palette.gohan.light,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.goku.light,
  height: "fit-content",
  borderRadius: "8px",
}));

export const Header: React.FC = () => {
  const user = useSelector(userSelectors.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { apiCall } = UseApi();

  const onSuccessLogout = () => {
    dispatch(userClear());
    dispatch(tokenClear());
    navigate("/");
  };

  const logoutApiCall = () => {
    apiCall({
      url: ACCOUNT_URL.AUTH_LOGOUT,
      method: "post",
      successCallback: onSuccessLogout,
    });
  };

  return (
    <StyledBox>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <StyledButton sx={{ px: 2, py: 1 }} {...bindTrigger(popupState)}>
              <ExpandMoreIcon
                sx={{ color: "trunks.light" }}
                fontSize={"small"}
              />
              <Typography marginX={2} variant="xs" sx={{ color: "popo.light" }}>
                {user.firstName}
              </Typography>
              <Avatar
                sx={{ width: "32px", height: "32px" }}
                src={user.avatar}
              />
            </StyledButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={logoutApiCall}>{TRANSLATIONS.logout}</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </StyledBox>
  );
};
