import {
  Box,
  ButtonBase,
  Container,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import { SideBar } from "../../components/SideBar";
import { TRANSLATIONS, TeacherMenuItem, columns } from "./constants";
import { CustomDataGrid } from "../../components/DataGrid";
import { TextInput } from "../../components/TextInput";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";

import UseApi from "../../hooks/useApi";
import { useEffect, useState } from "react";

import {
  ACCOUNT_URL,
  UNIVERSITY_URL,
  initClass,
  initStudent,
} from "../../constants/global";
import { useNavigate, useParams } from "react-router-dom";
import { toFa } from "../../utils/numbers/numbers";
import { Student } from "../../types/student";
import { studentTransformer } from "../../utils/dataTransformers";
import { Class } from "../../types/class";

const ClassDetails = () => {
  const { classId } = useParams();
  const { apiCall, loading } = UseApi();
  const navigate = useNavigate();
  const [inputState, setInputState] = useState("");
  const [classDetail, setClassDetail] = useState<Class>(initClass);
  const [data, setData] = useState<{
    students: Student[];
    count?: number;
    numberOfPages?: number;
  }>({
    students: [initStudent],
    count: 0,
    numberOfPages: 0,
  });
  const [filteredStudents, setFilteredStudents] = useState([
    {
      id: 1,
      name: "",
      SID: "",
      area: "",
      entranceYear: "",
    },
  ]);

  const onStudentsListSuccess = (res: any) => {
    setData({
      students: res.data.data.map((item: any) => studentTransformer(item)),
      count: res.data?.count,
      numberOfPages: res.data?.num_of_pages,
    });
  };

  const searchRequest = (studentId: string) => {
    apiCall({
      url: `${ACCOUNT_URL.STUDENTS}/${studentId}`,
      method: "get",
      successCallback: onStudentsListSuccess,
    });
  };

  const search = (e: any) => {
    if (e.code === "Enter") searchRequest(inputState);
  };

  const studentList = () => {
    apiCall({
      url: ACCOUNT_URL.STUDENTS + `?/seminar_class/${classId}`,
      method: "get",
      successCallback: onStudentsListSuccess,
    });
  };

  const onClassDetailsSuccess = (res: any) => {
    setClassDetail(res.data);
  };

  const classDetails = () => {
    apiCall({
      url: UNIVERSITY_URL.SEMINAR_CLASS + `/${classId}`,
      method: "get",
      successCallback: onClassDetailsSuccess,
    });
  };

  useEffect(() => {
    classDetails();
    studentList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.students) {
      const filterStudents = data.students?.map((item) => {
        return {
          id: item.id,
          name: item.user.firstName,
          SID: toFa(item.SID) || "",
          area: item.area.title,
          entranceYear: toFa(item.entranceYear) || "",
        };
      });
      setFilteredStudents(filterStudents);
    }
  }, [data]);

  const ContainerStyle = styled(Container)({
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    gap: 24,
  });

  return (
    <SideBar menuItems={TeacherMenuItem}>
      <ContainerStyle>
        <Typography variant="lg" sx={{ textAlign: "start", display: "flex" }}>
          <p>{TRANSLATIONS.pageTitle(classDetail?.title, classDetail?.code)}</p>
        </Typography>
        <Box>
          <TextInput
            placeholder={
              convertLocale({ key: "THESIS_SEARCH_PLACE_HOLDER" }).text
            }
            type="text"
            sx={{ width: "65%" }}
            value={inputState}
            onChange={(e) => {
              setInputState(e.target.value);
            }}
            onKeyUp={search}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ButtonBase>
                    <img src="/assets/images/search.svg" alt="search" />
                  </ButtonBase>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <CustomDataGrid
          columns={columns}
          rows={filteredStudents}
          onRowClick={(e) => navigate(`/students/${e.id.toString()}`)}
          loading={loading}
          numberOfPages={data.numberOfPages}
          currentPage={data.count}
        />
      </ContainerStyle>
    </SideBar>
  );
};

export default ClassDetails;
