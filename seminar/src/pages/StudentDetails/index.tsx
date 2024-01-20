import { Box, Container, Typography } from "@mui/material";
import { SideBar } from "../../components/SideBar";
import { TeacherMenuItem, columns } from "./constants";
import { CustomDataGrid } from "../../components/DataGrid";
import { StudentDetail } from "./components/StudentDetail";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import UseApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { Student } from "../../types/student";
import {
  studentTransformer,
  thesisTransformer,
} from "../../utils/dataTransformers";
import {
  ACCOUNT_URL,
  UNIVERSITY_URL,
  initStudent,
  initThesis,
} from "../../constants/global";
import { Thesis } from "../../types/thesis";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();
  const { apiCall, loading } = UseApi();
  const [student, setStudent] = useState<Student>(initStudent);
  const [data, setData] = useState<{
    thesis: Thesis[];
    count?: number;
    numberOfPages?: number;
  }>({
    thesis: [initThesis],
    count: 0,
    numberOfPages: 0,
  });
  const [filteredThesis, setFilteredThesis] = useState([
    {
      id: 1,
      title: "",
      student: "",
      supervisor: "",
      createdAt: "",
    },
  ]);

  const onStudentDetailsSuccess = (res: any) => {
    setStudent(studentTransformer(res.data));
  };
  const onThesisSuccess = (res: any) => {
    setData({
      thesis: res.data.data.map((theses: any) => thesisTransformer(theses)),
      count: res.data?.count,
      numberOfPages: res.data.num_of_pages,
    });
  };

  const studentDetails = () => {
    apiCall({
      url: ACCOUNT_URL.STUDENT_DETAILS + `/${studentId}`,
      method: "get",
      successCallback: onStudentDetailsSuccess,
    });
  };

  const thesisApiCall = () => {
    apiCall({
      url: UNIVERSITY_URL.THESIS,
      method: "get",
      successCallback: onThesisSuccess,
    });
  };

  useEffect(() => {
    studentDetails();
    thesisApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.thesis) {
      const filterThesis = data.thesis?.map((item) => {
        return {
          id: item.id,
          title: item.title,
          student: item.student,
          supervisor: item.supervisors[0]?.user.firstName,
          createdAt: new Intl.DateTimeFormat("fa-IR").format(
            new Date(item.createdAt || Date.now()),
          ),
        };
      });
      setFilteredThesis(filterThesis);
    }
  }, [data.thesis]);

  return (
    <SideBar menuItems={TeacherMenuItem}>
      <Container>
        <StudentDetail student={student} />
        <Box sx={{ marginY: 5 }}>
          <Typography variant="lg" sx={{ textAlign: "start" }}>
            <Localizer localeKey="RECORDED_SESSIONS" />
          </Typography>
        </Box>
        <CustomDataGrid
          columns={columns}
          rows={filteredThesis}
          loading={loading}
          numberOfPages={data.numberOfPages}
          currentPage={data.count}
        />
      </Container>
    </SideBar>
  );
};

export default StudentDetails;
