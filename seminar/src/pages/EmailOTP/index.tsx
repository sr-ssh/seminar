import { Box, Button, Container, Typography, styled } from "@mui/material";
import FormInput from "../../components/OTP";
import useCountdown from "../../hooks/useCountdown";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import UseApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store/user/selector";
import { ACCOUNT_URL } from "../../constants/global";
import { useState } from "react";
import LoadingButton from "../../components/LoadingButton";

const ContainerStyle = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
});

const EmailOTP = () => {
  const [code, setCode] = useState("");
  const { time, reset } = useCountdown(10);
  const { apiCall } = UseApi();
  const navigate = useNavigate();
  const email = useSelector(userSelectors.user).email;

  const submitHandler = async (data: string) => {
    await new Promise((resolve) =>
      apiCall({
        url: ACCOUNT_URL.AUTH_VERIFY + "/",
        query: { code: data, email },
        method: "post",
        successCallback: (res) => {
          resolve("");
          navigate("/login");
        },
        failedCallback: () => resolve(""),
      }),
    );
  };

  const resendCode = async () => {
    await new Promise((resolve) =>
      apiCall({
        url: ACCOUNT_URL.AUTH_RESEND + "/",
        query: { email },
        method: "post",
        successCallback: (res) => {
          resolve("");
          reset();
        },
        failedCallback: () => resolve(""),
      }),
    );
  };

  return (
    <ContainerStyle>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography variant="xl" marginBlockEnd={6}>
          <Localizer localeKey="OTP_TITLE" />
        </Typography>
        <Typography variant="md" marginBlockEnd={"12px"}>
          <Localizer localeKey="OTP_ENTER_CODE" />
        </Typography>
        <FormInput
          onSubmit={(data) => {
            setCode(data);
            submitHandler(data);
          }}
        />
        {/* <Button
          variant="contained"
          sx={{ marginBlockEnd: "22px", width: "90%" }}
          onClick={(e) => submitHandler(code)}
        >
          <Localizer localeKey="OTP_LOGIN" />
        </Button> */}
        <LoadingButton
          buttonProps={{
            sx: { marginBlockEnd: "22px", width: "90%" },
            size: "medium",
          }}
          onSubmit={() => submitHandler(code)}
        >
          <Localizer localeKey="OTP_LOGIN" />
        </LoadingButton>
        {time.minutes || time.seconds ? (
          <Typography variant="xs">
            <Localizer localeKey="OTP_SEND_AGAIN" /> {time.minutes}:
            {time.seconds}
          </Typography>
        ) : (
          <LoadingButton
            buttonProps={{
              sx: { width: "90%" },
              size: "small",
              variant: "text",
            }}
            onSubmit={resendCode}
          >
            <Localizer localeKey="OTP_SEND_AGAIN" />
          </LoadingButton>
        )}
      </Box>
    </ContainerStyle>
  );
};

export default EmailOTP;
