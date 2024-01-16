import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Typography,
  styled,
} from "@mui/material";
import BasicSelect from "./Select";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import { Label } from "../Label";
import { TextInput } from "../TextInput";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";
import { useEffect, useState } from "react";
import UseApi from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import PasswordTextInput from "../PasswordTextInput";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_URL, CORE_URL } from "../../constants/global";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/user";

const ContainerStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: "100%",
  textAlign: "start",
});

const SubmitButton = styled(Button)({
  marginBlockStart: 24,
});

const SignUpForm = () => {
  const [fields, setFields] = useState([]);
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const { apiCall } = UseApi();
  useAuth();

  const onFieldChoose = (field: string) => {
    apiCall({
      url: `${CORE_URL.AREAS}?id=${field}`,
      method: "get",
      successCallback: ({ data }) => setAreas(data.data),
    });
  };

  const submitHandler = (data: any) => {
    setLoading(true);
    apiCall({
      url: ACCOUNT_URL.AUTH_REGISTER + "/",
      query: data,
      method: "post",
      successCallback: () => {
        setLoading(false);
        dispatch(setUserInfo({ ...data, firstName: data.lastName, type: 1 }));
        navigate("/otp");
      },
    });
  };

  useEffect(() => {
    const getFields = () => {
      apiCall({
        url: CORE_URL.FIELDS,
        method: "get",
        successCallback: ({ data }) => setFields(data.data),
      });
    };

    getFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box width={"63%"} textAlign={"center"}>
      <Box marginBlockEnd={6}>
        <Typography variant="xl">
          <Localizer localeKey="SIGNUP_TITLE" />
        </Typography>
      </Box>
      <ContainerStyle>
        <Box display={"flex"} gap={3}>
          <FormControl variant="standard" sx={{ flex: 1 }}>
            <Label htmlFor="full_name">
              <Localizer localeKey="SIGNUP_NAME" />
            </Label>
            <TextInput
              placeholder={
                convertLocale({ key: "SIGNUP_NAME_PLACEHOLDER" }).text
              }
              id="full_name"
              type="text"
              fullWidth
              {...register("full_name")}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ flex: 1 }}>
            <Label htmlFor="number">
              <Localizer localeKey="SIGNUP_STUDENT_NUMBER" />
            </Label>
            <TextInput
              placeholder={
                convertLocale({ key: "SIGNUP_STUDENT_NUMBER_PLACEHOLDER" }).text
              }
              id="number"
              type="tel"
              fullWidth
              {...register("number")}
            />
          </FormControl>
        </Box>
        <FormControl variant="standard" fullWidth>
          <Label htmlFor="email">
            <Localizer localeKey="SIGNUP_EMAIL_ADDRESS" />
          </Label>
          <TextInput
            placeholder={
              convertLocale({ key: "SIGNUP_EMAIL_ADDRESS_PLACEHOLDER" }).text
            }
            id="email"
            type="email"
            fullWidth
            {...register("email")}
          />
        </FormControl>
        <FormControl variant="standard">
          <Label htmlFor="password">
            <Localizer localeKey="SIGNUP_PASSWORD" />
          </Label>
          <PasswordTextInput options={register("password")} />
        </FormControl>
        <Box display={"flex"} gap={3}>
          <BasicSelect
            labelLocalKey="SIGNUP_MAJOR"
            placeHolder="SIGNUP_MAJOR_PLACEHOLDER"
            options={fields}
            onChange={(e) => onFieldChoose(e.target.value)}
          />
          <BasicSelect
            labelLocalKey="SIGNUP_ORIENTATION"
            placeHolder="SIGNUP_ORIENTATION_PLACEHOLDER"
            options={areas}
            onChange={(e) => setValue("area", e.target.value)}
          />
        </Box>
      </ContainerStyle>
      <SubmitButton
        variant="contained"
        size="large"
        fullWidth
        onClick={handleSubmit(submitHandler)}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={25} />
        ) : (
          <Typography variant="sm">
            <Localizer localeKey="SIGNUP_SUBMIT_BUTTON" />
          </Typography>
        )}
      </SubmitButton>
    </Box>
  );
};

export default SignUpForm;
