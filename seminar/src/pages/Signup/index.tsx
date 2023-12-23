import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { WelcomeImage } from "../../components/Welcome";
import SignUpForm from "../../components/Signup";

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

const SignUp = () => {
  return (
    <ContainerStyle>
      <WelcomeImage />
      <StyledBox>
        <SignUpForm />
      </StyledBox>
    </ContainerStyle>
  );
};

export default SignUp;
