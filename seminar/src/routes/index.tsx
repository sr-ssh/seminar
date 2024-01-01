import { Container } from "@mui/material";
import EmailOTP from "../pages/EmailOTP";
import SignUp from "../pages/Signup";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomDataGrid } from "../components/DataGrid";
import Login from "../pages/Login";
import StudentDetails from "../pages/StudentDetails";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<div></div>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/otp" element={<EmailOTP />} />
        <Route path="/student-details" element={<StudentDetails />} />
        <Route
          path="/"
          element={
            <Container
              sx={{ paddingBlockStart: 4, backgroundColor: "goku.light" }}
            >
              <CustomDataGrid />
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
