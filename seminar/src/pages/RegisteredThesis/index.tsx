import {
  Box,
  ButtonBase,
  Container,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import { SideBar } from "../../components/SideBar";
import { columns } from "./constants";
import { CustomDataGrid } from "../../components/DataGrid";
import UseApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { getThesisTransformer } from "../../utils/dataTransformers";
import {
  StudentMenuItem,
  UNIVERSITY_URL,
  initRegisteredThesis,
} from "../../constants/global";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import { TextInput } from "../../components/TextInput";
import { convertLocale } from "../../hooks/useGlobalLocales/useGlobalLocales";
import { useNavigate } from "react-router";
import { userSelectors } from "../../store/user/selector";
import { useSelector } from "react-redux";

const ContainerStyle = styled(Container)({
  textAlign: "start",
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

const RegisteredThesis = () => {
  const { apiCall, loading } = UseApi();
  const navigate = useNavigate();
  const user = useSelector(userSelectors.user);
  const [data, setData] = useState<{
    data: any[];
    count?: number;
    numberOfPages?: number;
  }>({
    data: [initRegisteredThesis],
    count: 0,
    numberOfPages: 0,
  });
  const [filteredThesis, setFilteredThesis] = useState([
    {
      id: 1,
      title: "",
      student: "",
      supervisor: "",
    },
  ]);

  const onThesisSuccess = (res: any) => {
    const filterThesis = res.data.data.map((item: any) => {
      return {
        id: item.id,
        title: item.thesis.title,
        student: user.firstName + " " + user.lastName,
        supervisor: item.thesis.supervisors[0]?.user.last_name,
        status: item.status,
      };
    });
    setFilteredThesis(filterThesis);
  };

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    apiCall({
      url: `${UNIVERSITY_URL.THESIS_SEARCH}${e.target.value}`,
      method: "get",
      successCallback: onThesisSuccess,
    });
  };

  useEffect(() => {
    const getThesisList = () => {
      apiCall({
        url: UNIVERSITY_URL.REGISTEREDTHESIS,
        method: "get",
        successCallback: onThesisSuccess,
      });
    };
    getThesisList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SideBar menuItems={StudentMenuItem}>
        <ContainerStyle>
          <Typography variant="lg">
            <Localizer localeKey="REGISTERED_THESIS_TITLE" />
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
            loading={loading}
            numberOfPages={data.numberOfPages}
            currentPage={data.count}
            onRowClick={(e) => navigate(e.id.toString())}
          />
        </ContainerStyle>
      </SideBar>
    </>
  );
};

export default RegisteredThesis;
