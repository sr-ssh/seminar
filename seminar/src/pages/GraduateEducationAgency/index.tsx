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

import { thesisTransformer } from "../../utils/dataTransformers";
import { UNIVERSITY_URL, initThesis } from "../../constants/global";
import { useNavigate } from "react-router-dom";
import { userSelectors } from "../../store/user/selector";
import { useSelector } from "react-redux";
import { Thesis } from "../../types/thesis";

const GraduateEducationAgency = () => {
  const user = useSelector(userSelectors.user);
  const { apiCall, loading } = UseApi();
  const navigate = useNavigate();
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
      date: "",
    },
  ]);

  const onThesisListSuccess = (res: any) => {
    console.log(res.data.data);

    setData({
      thesis: res.data.data.map((item: any) => thesisTransformer(item)),
      count: res.data?.count,
      numberOfPages: res.data.num_of_pages,
    });

    console.log(data);
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    apiCall({
      url: `${UNIVERSITY_URL.THESIS}/?agent=${user.id}/${e.target.value}`,
      method: "get",
      successCallback: onThesisListSuccess,
    });
  };

  const thesisList = () => {
    apiCall({
      url: UNIVERSITY_URL.THESIS + `/?agent=${user.id}`,
      method: "get",
      successCallback: onThesisListSuccess,
    });
  };

  useEffect(() => {
    thesisList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.thesis) {
      const filterThesis = data.thesis?.map((item) => {
        return {
          id: item.id,
          title: item.title,
          student: item.student,
          supervisor: item.supervisors[0].user.lastName,
          date: new Intl.DateTimeFormat("fa-IR").format(
            new Date(item.createdAt || Date.now()),
          ),
        };
      });
      setFilteredThesis(filterThesis);
    }
  }, [data.thesis]);

  const ContainerStyle = styled(Container)({
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    gap: 24,
  });

  return (
    <SideBar menuItems={TeacherMenuItem}>
      <ContainerStyle>
        <Typography variant="lg" sx={{ textAlign: "start" }}>
          <Localizer localeKey="THESIS_LIST_TITLE" />
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
          rows={filteredThesis}
          onRowClick={(e) => navigate(e.id.toString())}
          loading={loading}
          numberOfPages={data.numberOfPages}
          currentPage={data.count}
        />
      </ContainerStyle>
    </SideBar>
  );
};

export default GraduateEducationAgency;
