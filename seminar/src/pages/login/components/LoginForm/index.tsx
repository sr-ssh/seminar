import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import { Localizer } from "../../../../hooks/useGlobalLocales/Localizer";
import { Label } from "../../../../components/Label";
import { TextInput } from "../../../../components/TextInput";
import { convertLocale } from "../../../../hooks/useGlobalLocales/useGlobalLocales";
import { useForm } from "../../../../hooks/useForm/useForm";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
            onChange={handleChange}
          />
        </FormControl>
        <FormControl variant="standard">
          <Label htmlFor="password">
            <Localizer localeKey="LOGIN_PASSWORD" />
          </Label>
          <TextInput
            id="password"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Localizer localeKey="LOGIN_SHOW_PASSWORD" />
                </InputAdornment>
              ),
            }}
            fullWidth
            onChange={handleChange}
          />
        </FormControl>
      </ContainerStyle>
      <Submit>
        <SubmitButton
          variant="contained"
          size="large"
          fullWidth
          onClick={submitHandler}
        >
          <Typography variant="sm">
            <Localizer localeKey="LOGIN" />
          </Typography>
        </SubmitButton>

        <Button size="small" onClick={() => navigate("/otp")}>
          <Localizer localeKey="LOGIN_FORGET_PASS" />
        </Button>
      </Submit>
    </Box>
  );
};

export default LoginForm;
