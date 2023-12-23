import { Box, Button, Container, Typography, styled } from "@mui/material";
import FormInput from "../../components/OTP";
import useCountdown from "../../hooks/useCountdown";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";

const ContainerStyle = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
});

const EmailOTP = () => {
  const { time, reset } = useCountdown(10);
  return (
    <ContainerStyle>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography variant="xl" marginBlockEnd={6}>
          <Localizer localeKey="OTP_TITLE" />
        </Typography>
        <Typography variant="md" marginBlockEnd={"12px"}>
          <Localizer localeKey="OTP_ENTER_CODE" />
        </Typography>
        <FormInput />
        <Button
          variant="contained"
          sx={{ marginBlockEnd: "22px", width: "90%" }}
        >
          <Localizer localeKey="OTP_LOGIN" />
        </Button>
        {time.minutes || time.seconds ? (
          <Typography variant="xs">
            <Localizer localeKey="OTP_SEND_AGAIN" /> {time.minutes}:
            {time.seconds}
          </Typography>
        ) : (
          <Button size="small" onClick={() => reset()}>
            <Localizer localeKey="OTP_SEND_AGAIN" />
          </Button>
        )}
      </Box>
    </ContainerStyle>
  );
};

export default EmailOTP;
