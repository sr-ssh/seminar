import { Box } from "@mui/material";
import EmailOTP from "../pages/EmailOTP";
import SignUp from "../pages/Signup";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomDataGrid } from "../components/DataGrid";
import Login from "../pages/Login";
import StudentDetails from "../pages/StudentDetails";
import Thesises from "../pages/Thesis";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/otp" element={<EmailOTP />} />
        <Route
          path="/student-details/:studentId"
          element={<StudentDetails />}
        />
        <Route path="/thesis" element={<Thesises />} />
        <Route
          path="/"
          element={
            <Box sx={{ paddingBlockStart: 4, backgroundColor: "goku.light" }}>
              <CustomDataGrid columns={[]} rows={undefined} />
            </Box>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
