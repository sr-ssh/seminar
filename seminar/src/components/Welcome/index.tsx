import { Box, Button, Typography, styled } from "@mui/material";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";

const StyledBox = styled(Box)(({ theme }) => ({
  flex: 4.3,
  backgroundImage: `url("/assets/images/ut.png")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(38, 37, 37, 0.50)",
  backgroundBlendMode: "multiply",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: theme.palette.gohan.light,
}));

export const WelcomeImage = () => {
  return (
    <StyledBox>
      <Typography
        variant="_3xl"
        marginBlockEnd={6}
        width={156}
        textAlign={"center"}
      >
        <Localizer localeKey="WELCOME_TO_SEMINAR" />
      </Typography>
      <Box display="flex" flexDirection={"column"} gap={3}>
        <Typography variant="lg">
          <Localizer localeKey="SIGNUP_HAVE_YOU_SIGNED" />
        </Typography>
        <Button variant="contained" size="large" fullWidth>
          <Typography variant="md">
            <Localizer localeKey="SIGNUP_LOGIN_BUTTON" />
          </Typography>
        </Button>
      </Box>
    </StyledBox>
  );
};
