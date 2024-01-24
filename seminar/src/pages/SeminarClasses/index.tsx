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

import { classTransformer } from "../../utils/dataTransformers";
import { UNIVERSITY_URL, initClass } from "../../constants/global";
import { useNavigate } from "react-router-dom";
import { Class } from "../../types/class";
import { toFa } from "../../utils/numbers/numbers";

const ClassLists = () => {
  const { apiCall, loading } = UseApi();
  const navigate = useNavigate();
  const [data, setData] = useState<{
    classes: Class[];
    count?: number;
    numberOfPages?: number;
  }>({
    classes: [initClass],
    count: 0,
    numberOfPages: 0,
  });
  const [filteredClasses, setFilteredClasses] = useState([
    {
      id: 1,
      title: "",
      membersCount: "",
      area: "",
      year: "",
    },
  ]);

  const onClassesListSuccess = (res: any) => {
    setData({
      classes: res.data.data.map((item: any) => classTransformer(item)),
      count: res.data?.count,
      numberOfPages: res.data.num_of_pages,
    });
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    apiCall({
      url: `${UNIVERSITY_URL.SEMINAR_CLASS}/${e.target.value}`,
      method: "get",
      successCallback: onClassesListSuccess,
    });
  };

  const classesList = () => {
    apiCall({
      url: UNIVERSITY_URL.SEMINAR_CLASS,
      method: "get",
      successCallback: onClassesListSuccess,
    });
  };

  useEffect(() => {
    classesList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.classes) {
      const filterClasses = data.classes?.map((item) => {
        return {
          id: item.id,
          title: item.title,
          membersCount: toFa(item.membersCount) || "",
          area: item.area.title,
          year: toFa(item.year.toString()) || "",
        };
      });
      setFilteredClasses(filterClasses);
    }
  }, [data.classes]);

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
          rows={filteredClasses}
          onRowClick={(e) => navigate(e.id.toString())}
          loading={loading}
          numberOfPages={data.numberOfPages}
          currentPage={data.count}
        />
      </ContainerStyle>
    </SideBar>
  );
};

export default ClassLists;
