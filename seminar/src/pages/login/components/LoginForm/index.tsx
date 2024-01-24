import {
  Box,
  Button,
  ButtonBase,
  FormControl,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Localizer } from "../../../../hooks/useGlobalLocales/Localizer";
import { Label } from "../../../../components/Label";
import { TextInput } from "../../../../components/TextInput";
import { convertLocale } from "../../../../hooks/useGlobalLocales/useGlobalLocales";
import { useNavigate } from "react-router-dom";
import UseApi from "../../../../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { userSelectors } from "../../../../store/user/selector";
import { useEffect, useState } from "react";
import { setUserInfo } from "../../../../store/user";
import { setToken } from "../../../../store/user/token";
import { ACCOUNT_URL } from "../../../../constants/global";

// email: "Negar@ut.ac.ir",
// password: "Negar@1234",
const ContainerStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
  textAlign: "start",
});

const SubmitButton = styled(Button)({
  marginRight: 20,
  width: "fit-content",
  paddingLeft: 24,
  paddingRight: 24,
});

const Submit = styled("div")({
  marginBlockStart: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const LoginForm = () => {
  const { apiCall } = UseApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(userSelectors.token);

  type FormValues = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>();

  const [passTextFieldType, setPassTextFieldType] = useState("password");

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

  const onLoginSuccess = (res: any) => {
    dispatch(
      setToken({
        accessToken: res.data.access,
        refreshToken: res.data.refresh,
      }),
    );
  };

  const loginApiCall = (info: FormValues) => {
    const query = {
      email: info.email,
      password: info.password,
    };

    apiCall({
      url: ACCOUNT_URL.AUTH_LOGIN,
      query,
      method: "post",
      successCallback: onLoginSuccess,
    });
  };

  const onSubmit = (data: FormValues) => {
    loginApiCall(data);
  };

  return (
    <Box width={"63%"} textAlign={"center"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box marginBlockEnd={6}>
          <Typography variant="xl">
            <Localizer localeKey="LOGIN_TITLE" />
          </Typography>
        </Box>
        <ContainerStyle>
          <FormControl variant="standard" fullWidth>
            <Label htmlFor="email">
              <Localizer localeKey="LOGIN_EMAIL_ADDRESS" />
            </Label>
            <TextInput
              placeholder={
                convertLocale({ key: "LOGIN_EMAIL_ADDRESS_PLACEHOLDER" }).text
              }
              id="email"
              type="email"
              fullWidth
              {...register("email")}
            />
          </FormControl>
          <FormControl variant="standard">
            <Label htmlFor="password">
              <Localizer localeKey="LOGIN_PASSWORD" />
            </Label>
            <TextInput
              id="password"
              type={passTextFieldType}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ButtonBase onClick={() => setPassTextFieldType("text")}>
                      <Localizer localeKey="LOGIN_SHOW_PASSWORD" />
                    </ButtonBase>
                  </InputAdornment>
                ),
              }}
              fullWidth
              {...register("password")}
            />
          </FormControl>
        </ContainerStyle>
        <Submit>
          <SubmitButton
            variant="contained"
            size="large"
            type="submit"
            fullWidth
          >
            <Typography variant="sm">
              <Localizer localeKey="LOGIN" />
            </Typography>
          </SubmitButton>

          <Button size="small" onClick={() => navigate("/otp")}>
            <Localizer localeKey="LOGIN_FORGET_PASS" />
          </Button>
        </Submit>
      </form>
    </Box>
  );
};

export default LoginForm;
