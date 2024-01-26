import EmailOTP from "../pages/EmailOTP";
import SignUp from "../pages/Signup";
import { Route, Routes } from "react-router-dom";
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
import ClassDetails from "../pages/ClassDetails";
import GraduateEducationAgency from "../pages/GraduateEducationAgency";
import AgencyDetails from "../pages/AgencyDetails";

export const Routing = () => {
  const userType = useSelector(userSelectors.user).type;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/otp" element={<EmailOTP />} />

      {userType === 2 && (
        <>
          <Route path="students" element={<StudentsList />} />
          <Route path="/students/:studentId" element={<StudentDetails />} />
          <Route path="classes" element={<ClassLists />} />
          <Route path="classes/:classId" element={<ClassDetails />} />
          <Route path="agent" element={<GraduateEducationAgency />} />
          <Route path="agent/:agentId" element={<AgencyDetails />} />
        </>
      )}
      {userType === 1 && (
        <>
          <Route path="/" element={<SelectSeminar />} />
          <Route path="/thesis" element={<Thesises />} />
          <Route path="/thesis/:id" element={<ThesisDetail />} />
          <Route path="/registered-thesis" element={<RegisteredThesis />} />
        </>
      )}
    </Routes>
  );
};
