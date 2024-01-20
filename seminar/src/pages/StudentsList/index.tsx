import {
  Box,
  ButtonBase,
  Container,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import { SideBar } from "../../components/SideBar";
import { TeacherMenuItem, columns } from "./constants";
import { CustomDataGrid } from "../../components/DataGrid";
import { TextInput } from "../../components/TextInput";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import UseApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { Student } from "../../types/student";
import { studentTransformer } from "../../utils/dataTransformers";
import { ACCOUNT_URL, initStudent } from "../../constants/global";
import { useNavigate } from "react-router-dom";

const StudentsList = () => {
  const { apiCall, loading } = UseApi();
  const navigate = useNavigate();
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

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    apiCall({
      url: `${ACCOUNT_URL.STUDENTS}/${e.target.value}`,
      method: "get",
      successCallback: onStudentsListSuccess,
    });
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

  const ContainerStyle = styled(Container)({
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    gap: 24,
  });

  return (
    <>
      {!loading && (
        <SideBar menuItems={TeacherMenuItem}>
          <ContainerStyle>
            <Typography variant="lg" sx={{ textAlign: "start" }}>
              <Localizer localeKey="RECORDED_SESSIONS" />
            </Typography>
            <Box>
              <TextInput
                placeholder={
                  convertLocale({ key: "THESIS_SEARCH_PLACE_HOLDER" }).text
                }
                type="text"
                sx={{ width: "65%" }}
                onChange={search}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ButtonBase>
                        <img src="assets/images/search.svg" alt="search" />
                      </ButtonBase>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <CustomDataGrid
              columns={columns}
              rows={filteredStudents}
              onRowClick={(e) => navigate(e.id.toString())}
            />
          </ContainerStyle>
        </SideBar>
      )}
    </>
  );
};

export default StudentsList;
