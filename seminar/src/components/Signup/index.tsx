import {
  Box,
  Button,
  FormControl,
  InputAdornment,
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
  const { register, handleSubmit, setValue } = useForm();
  const { apiCall } = UseApi();

  const onFieldChoose = (field: string) => {
    console.log(field);
    apiCall({
      url: `https://api.seminar.arkamond.com/api/core/areas?id=${field}`,
      method: "get",
      successCallback: ({ data }) => setAreas(data.data),
    });
  };

  const submitHandler = (data: any) => {
    console.log(data);
    apiCall({
      url: "https://api.seminar.arkamond.com/api/account/auth/register/",
      query: data,
      method: "post",
      successCallback: ({ data }) => setFields(data.data),
    });
  };

  useEffect(() => {
    const getFields = () => {
      apiCall({
        url: "https://api.seminar.arkamond.com/api/core/fields/",
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
          <TextInput
            id="password"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Localizer localeKey="SIGNUP_SHOW_PASSWORD" />
                </InputAdornment>
              ),
            }}
            fullWidth
            {...register("password")}
          />
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
      >
        <Typography variant="sm">
          <Localizer localeKey="SIGNUP_SUBMIT_BUTTON" />
        </Typography>
      </SubmitButton>
    </Box>
  );
};

export default SignUpForm;
