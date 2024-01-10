import { Box, Container, Typography } from "@mui/material";
import { SideBar } from "../../components/SideBar";
import { TeacherMenuItem } from "./constants";
import { CustomDataGrid } from "../../components/DataGrid";
import { StudentDetail } from "./components/StudentDetail";
import { Localizer } from "../../hooks/useGlobalLocales/Localizer";

const StudentDetails = () => {
  return (
    <SideBar menuItems={TeacherMenuItem}>
      <Container >
        <StudentDetail />
        <Box sx={{ marginY: 5 }}>
          <Typography variant="lg" sx={{ textAlign: "start" }}>
            <Localizer localeKey="RECORDED_SESSIONS" />
          </Typography>
        </Box>
        <CustomDataGrid />
      </Container>
    </SideBar>
  );
};

export default StudentDetails;
