import EmailOTP from "../pages/EmailOTP";
import SignUp from "../pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import StudentDetails from "../pages/StudentDetails";
import Thesises from "../pages/Thesis";
import StudentsList from "../pages/StudentsList";
import ThesisDetail from "../pages/ThesisDetail";
import SelectSeminar from "../pages/SelectSeminar";
import RegisteredThesis from "../pages/RegisteredThesis";
import { useSelector } from "react-redux";
import { userSelectors } from "../store/user/selector";
import ClassLists from "../pages/SeminarClasses";

export const Routing = () => {
  const userType = useSelector(userSelectors.user).type;
  console.log(userType);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/otp" element={<EmailOTP />} />
        {userType === 2 && (
          <>
            <Route path="students" element={<StudentsList />} />
            <Route path="/students/:studentId" element={<StudentDetails />} />
            <Route path="classes" element={<ClassLists />} />
          </>
        )}
        {userType === 0 && (
          <>
            <Route path="/" element={<SelectSeminar />} />
            <Route path="/thesis" element={<Thesises />} />
            <Route path="/thesis/:id" element={<ThesisDetail />} />
            <Route path="/registered-thesis" element={<RegisteredThesis />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
