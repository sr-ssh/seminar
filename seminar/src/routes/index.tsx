import { Box } from "@mui/material";
import EmailOTP from "../pages/EmailOTP";
import SignUp from "../pages/Signup";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomDataGrid } from "../components/DataGrid";
import Login from "../pages/Login";
import StudentDetails from "../pages/StudentDetails";
import StudentsList from "../pages/StudentsList";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/otp" element={<EmailOTP />} />
        <Route path="students" element={<StudentsList />} />
        <Route
          path="/student-details/:studentId"
          element={<StudentDetails />}
        />
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
