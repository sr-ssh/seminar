import { Avatar, Box, Button, Typography, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

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
                name
              </Typography>
              <Avatar
                sx={{ width: "32px", height: "32px" }}
                src="https://www.google.com/logos/doodles/2024/new-years-day-2024-6753651837110174-la202124.gif"
              />
            </StyledButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem onClick={popupState.close}>My account</MenuItem>
              <MenuItem onClick={popupState.close}>Logout</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </StyledBox>
  );
};
