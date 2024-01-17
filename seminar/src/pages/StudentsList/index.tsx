import { Box, Container, Typography } from "@mui/material";
import { SideBar } from "../../components/SideBar";
import { TeacherMenuItem, columns } from "./constants";
import { CustomDataGrid } from "../../components/DataGrid";

import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import UseApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { Student } from "../../types/student";
import { studentTransformer } from "../../utils/dataTransformers";
import { ACCOUNT_URL, initStudent } from "../../constants/global";

const StudentsList = () => {
  const { apiCall, loading } = UseApi();
  const [students, setStudents] = useState<Student[]>([initStudent]);
  const [filteredStudents, setFilteredStudents] = useState([
    {
      id: 1,
      firstName: "",
      SID: 0,
      area: "",
      entranceYear: "",
    },
  ]);

  const onStudentsListSuccess = (res: any) => {
    setStudents(res.data.data.map((item: any) => studentTransformer(item)));
  };

  const studentsList = () => {
    apiCall({
      url: ACCOUNT_URL.STUDENTS,
      method: "get",
      successCallback: onStudentsListSuccess,
    });
  };

  useEffect(() => {
    studentsList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (students) {
      const filterStudents = students?.map((item) => {
        return {
          id: item.id,
          firstName: item.user.firstName,
          SID: item.SID,
          area: item.area.title,
          entranceYear: item.entranceYear,
        };
      });
      setFilteredStudents(filterStudents);
    }
  }, [students]);

  return (
    <>
      {!loading && (
        <SideBar menuItems={TeacherMenuItem}>
          <Container>
            <Box sx={{ marginY: 5 }}>
              <Typography variant="lg" sx={{ textAlign: "start" }}>
                <Localizer localeKey="RECORDED_SESSIONS" />
              </Typography>
            </Box>
            <CustomDataGrid columns={columns} rows={filteredStudents} />
          </Container>
        </SideBar>
      )}
    </>
  );
};

export default StudentsList;
