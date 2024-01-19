import { Container, styled } from "@mui/system";
import { SideBar } from "../../components/SideBar";
import { StudentMenuItem } from "../../constants/global";
import { Box, FormControl } from "@mui/material";
import LoadingButton from "../../components/LoadingButton";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";
import BasicSelect from "../../components/Signup/Select";
import { useForm } from "react-hook-form";
import SupervisorSelect from "./components/SupervisorSelect";

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
  const { setValue } = useForm();

  return (
    <SideBar menuItems={StudentMenuItem}>
      <ContainerStyle>
        <BoxStyle flexDirection={"column"} alignItems={"center"}>
          <BoxStyle width={600}>
            <SupervisorSelect />
            <FormControl variant="standard" sx={{ flex: 1 }}>
              <BasicSelect
                labelLocalKey="SELECT_SEMINAR_CLASS_LABEL"
                placeHolder="SELECT_SEMINAR_CLASS_PLACEHOLDER"
                options={[]}
                onChange={(e) => setValue("classes", e.target.value)}
              />
            </FormControl>
          </BoxStyle>
          <LoadingButton
            onSubmit={() => console.log("first")}
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
