import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import BasicSelect from "./Select";
import { useForm } from "../../hooks/useForm/useForm";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import { Label } from "../Label";
import { TextInput } from "../TextInput";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";

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
  const { submitHandler, onChangeHandler } = useForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChangeHandler(e.target.name, e.target.value);
  };
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
            <Label htmlFor="name">
              <Localizer localeKey="SIGNUP_NAME" />
            </Label>
            <TextInput
              placeholder={
                convertLocale({ key: "SIGNUP_NAME_PLACEHOLDER" }).text
              }
              id="name"
              name="name"
              type="text"
              fullWidth
              onChange={handleChange}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ flex: 1 }}>
            <Label htmlFor="student-number">
              <Localizer localeKey="SIGNUP_STUDENT_NUMBER" />
            </Label>
            <TextInput
              placeholder={
                convertLocale({ key: "SIGNUP_STUDENT_NUMBER_PLACEHOLDER" }).text
              }
              id="student"
              type="tel"
              fullWidth
              onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </FormControl>
        <Box display={"flex"} gap={3}>
          <BasicSelect
            labelLocalKey="SIGNUP_MAJOR"
            placeHolder="SIGNUP_MAJOR_PLACEHOLDER"
            onChange={handleChange}
          />
          <BasicSelect
            labelLocalKey="SIGNUP_ORIENTATION"
            placeHolder="SIGNUP_ORIENTATION_PLACEHOLDER"
            onChange={handleChange}
          />
        </Box>
      </ContainerStyle>
      <SubmitButton
        variant="contained"
        size="large"
        fullWidth
        onClick={submitHandler}
      >
        <Typography variant="sm">
          <Localizer localeKey="SIGNUP_SUBMIT_BUTTON" />
        </Typography>
      </SubmitButton>
    </Box>
  );
};

export default SignUpForm;
