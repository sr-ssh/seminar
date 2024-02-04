import { Container, styled } from "@mui/system";
import { SideBar } from "../../components/SideBar";
import { ACCOUNT_URL, StudentMenuItem } from "../../constants/global";
import { Box, FormControl } from "@mui/material";
import LoadingButton from "../../components/LoadingButton";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import BasicSelect from "../../components/Signup/Select";
import { FieldValues, useForm } from "react-hook-form";
import SupervisorSelect from "./components/SupervisorSelect";
import SeminarClass from "./components/SeminarClass";
import UseApi from "../../hooks/useApi";

const BoxStyle = styled(Box)({
  display: "flex",
  gap: 24,
});

const ContainerStyle = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.gohan.light,
  borderRadius: 8,
  textAlign: "start",
  display: "flex",
  justifyContent: "center",
  paddingBlock: 35,
}));

const SelectSeminar = () => {
  const { setValue, handleSubmit } = useForm();
  const { apiCall } = UseApi();

  const updateUser = (value: FieldValues) => {
    console.log(value);

    apiCall({
      url: ACCOUNT_URL.STUDENT_UPDATE_ME,
      query: value,
      method: "put",
      successCallback: ({ data }) => {
        console.log(data);
      },
    });
  };

  return (
    <SideBar menuItems={StudentMenuItem}>
      <ContainerStyle>
        <BoxStyle flexDirection={"column"} alignItems={"center"}>
          <BoxStyle width={600}>
            <SupervisorSelect
              onSelect={(value) => setValue("supervisor", value)}
            />
            <SeminarClass
              onSelect={(value) => setValue("seminar_class", value)}
            />
          </BoxStyle>
          <LoadingButton
            onSubmit={handleSubmit(updateUser)}
            buttonProps={{ sx: { width: 288, borderRadius: 2 } }}
          >
            <Localizer localeKey="SELECT_SEMINAR_SUBMIT" />
          </LoadingButton>
        </BoxStyle>
      </ContainerStyle>
    </SideBar>
  );
};
export default SelectSeminar;
