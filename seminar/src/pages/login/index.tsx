import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { WelcomeImage } from "../../components/Welcome";

import LoginForm from "./components/LoginForm";

const ContainerStyle = styled.div({
  display: "flex",
  width: "100vw",
  height: "100vh",
});

const StyledBox = styled(Box)({
  flex: 5.7,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Login = () => {
  return (
    <ContainerStyle>
      <StyledBox>
        <LoginForm />
      </StyledBox>
      <WelcomeImage isSignUp={false} />
    </ContainerStyle>
  );
};

export default Login;
