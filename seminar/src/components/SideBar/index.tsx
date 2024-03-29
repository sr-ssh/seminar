import { Box, Button, MenuItem, Typography, styled } from "@mui/material";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import { MenuItem as MenuItemType } from "../../hooks/useGlobalLocales/GlobalLocalesType";
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { getCurrentURL } from "../../utils/getCurrentURL";

interface Props {
  menuItems: MenuItemType[];
  children: ReactNode;
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  left: 0,
  top: 0,
  width: "300px",
  height: "100%",
  paddingTop: 24,
  paddingBottom: 24,
  paddingLeft: 32,
  paddingRight: 32,
  zIndex: 10,
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  backgroundColor: theme.palette.gohan.light,
}));

const Menu = styled(MenuItem)(({ theme, selected }) => ({
  marginTop: 4,
  marginBottom: 4,
  width: "fit-content",
  borderRadius: 8,
  ":hover": {
    color: theme.palette.piccolo.light,
    backgroundColor: theme.palette.ghost.light,
  },
  ...(selected
    ? {
        color: theme.palette.piccolo.light,
        backgroundColor: theme.palette.ghost.light,
      }
    : { color: theme.palette.bulma.light }),
}));

const OnMenu = styled(Button)(({ theme }) => ({
  marginTop: 4,
  marginBottom: 4,
  width: "fit-content",
  backgroundColor: theme.palette.ghost.light,
  color: theme.palette.piccolo.light,
}));

export const SideBar: React.FC<Props> = ({ menuItems, children }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", width: "auto" }}>
      <StyledBox>
        <Typography variant="_md" marginBlockEnd={4}>
          <Localizer localeKey="SEMINAR" />
        </Typography>
        {menuItems.map((menu, index) => {
          return (
            <>
              {getCurrentURL() === menu.link ? (
                <OnMenu key={index} onClick={() => navigate(menu.link)}>
                  {menu.title}
                </OnMenu>
              ) : (
                <Menu key={index} onClick={() => navigate(menu.link)}>
                  {menu.title}
                </Menu>
              )}
            </>
          );
        })}
      </StyledBox>
      <Box
        sx={{
          left: "300px",
          flexGrow: 1,
          display: "flex",
          position: "absolute",
          padding: "70px 50px",
          width: "-webkit-fill-available",
          backgroundColor: "goku.light",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
