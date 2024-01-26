import {
  Box,
  ButtonBase,
  Container,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import { SideBar } from "../../components/SideBar";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import { TeacherMenuItem, columns } from "./constants";
import { CustomDataGrid } from "../../components/DataGrid";
import { TextInput } from "../../components/TextInput";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";

import UseApi from "../../hooks/useApi";
import { useEffect, useState } from "react";

import { ACCOUNT_URL, initStudent } from "../../constants/global";
import { useNavigate, useParams } from "react-router-dom";
import { toFa } from "../../utils/numbers/numbers";
import { Student } from "../../types/student";
import { studentTransformer } from "../../utils/dataTransformers";

const AgencyDetails = () => {
  const { agentId } = useParams();
  const { apiCall, loading } = UseApi();
  const navigate = useNavigate();
  const [inputState, setInputState] = useState("");
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
      url: ACCOUNT_URL.STUDENTS + `?/seminar_class/${agentId}`,
      method: "get",
      successCallback: onStudentsListSuccess,
    });
  };

  useEffect(() => {
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
          <Localizer localeKey="THESIS_LIST_TITLE" />
        </Typography>
        <Box>
          <TextInput
            key="search"
            placeholder={
              convertLocale({ key: "THESIS_SEARCH_PLACE_HOLDER" }).text
            }
            type="search"
            sx={{ width: "65%" }}
            defaultValue={inputState}
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

export default AgencyDetails;
