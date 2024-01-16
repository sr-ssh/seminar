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
import UseApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { thesisTransformer } from "../../utils/dataTransformers";
import { UNIVERSITY_URL, initThesis } from "../../constants/global";
import { Thesis } from "../../types/thesis";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import { TextInput } from "../../components/TextInput";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";

const ContainerStyle = styled(Container)({
  textAlign: "start",
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

const Thesises = () => {
  const { apiCall, loading } = UseApi();
  const [thesis, setThesis] = useState<Thesis[]>([initThesis]);
  const [filteredThesis, setFilteredThesis] = useState([
    {
      id: 1,
      title: "",
      student: "",
      supervisor: "",
      createdAt: "",
    },
  ]);

  const onThesisSuccess = (res: any) => {
    setThesis(res.data.data.map((theses: any) => thesisTransformer(theses)));
  };

  useEffect(() => {
    const getThesisList = () => {
      apiCall({
        url: UNIVERSITY_URL.THESIS,
        method: "get",
        successCallback: onThesisSuccess,
      });
    };
    getThesisList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (thesis) {
      const filterThesis = thesis?.map((item) => {
        return {
          id: item.id,
          title: item.title,
          student: item.student,
          supervisor: item.supervisors[0]?.toString(),
          createdAt: item.createdAt,
        };
      });
      setFilteredThesis(filterThesis);
    }
  }, [thesis]);

  return (
    <>
      <SideBar menuItems={TeacherMenuItem}>
        <ContainerStyle>
          <Typography variant="lg">
            <Localizer localeKey="THESIS_LIST_TITLE" />
          </Typography>
          <Box>
            <TextInput
              placeholder={
                convertLocale({ key: "THESIS_SEARCH_PLACE_HOLDER" }).text
              }
              type="text"
              sx={{ width: "65%" }}
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
            loading={loading}
          />
        </ContainerStyle>
      </SideBar>
    </>
  );
};

export default Thesises;
