import { Box, Button, Typography, styled } from "@mui/material";

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
}));

export const Header: React.FC = () => {
  return (
    <StyledBox>
      <StyledButton>
        {/* <Icon /> */}
        <Typography variant="_md">name</Typography>
        {/* //Image */}
      </StyledButton>
    </StyledBox>
  );
};
