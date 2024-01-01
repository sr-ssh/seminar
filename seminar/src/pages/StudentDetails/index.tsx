import { Container } from "@mui/material";
import { SideBar } from "../../components/SideBar";
import { TeacherMenuItem } from "./constants";
import { CustomDataGrid } from "../../components/DataGrid";

const StudentDetails = () => {
  return (
    <SideBar menuItems={TeacherMenuItem}>
      <Container
        sx={{
          paddingBlockStart: 4,
          backgroundColor: "goku.light",
          margin: 0,
        }}
      >
        <CustomDataGrid />
      </Container>
    </SideBar>
  );
};

export default StudentDetails;
