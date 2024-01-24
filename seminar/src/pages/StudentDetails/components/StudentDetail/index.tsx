import { Avatar, Box, Typography, styled } from "@mui/material";
import { Localizer } from "../../../../hooks/useGlobalLocales/Localizer";
import { Student } from "../../../../types/student";
import { toFa } from "../../../../utils/numbers/numbers";

interface Props {
  student: Student;
}

const DetailsStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
});

export const StudentDetail: React.FC<Props> = ({ student }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 6,
        backgroundColor: "gohan.light",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <DetailsStyle
          sx={{
            marginBottom: 3,
          }}
        >
          <Typography variant="lg" sx={{ marginBottom: "12px" }}>
            <Localizer localeKey="STUDENT_DETAILS_SID" />
          </Typography>
          <Typography variant="md">{toFa(student.SID)}</Typography>
        </DetailsStyle>
        <DetailsStyle
          sx={{
            marginBottom: 3,
          }}
        >
          <Typography variant="lg" sx={{ marginBottom: "12px" }}>
            <Localizer localeKey="STUDENT_DETAILS_SUPERVISOR" />
          </Typography>
          <Typography variant="md">
            {student.supervisor.user.lastName}
          </Typography>
        </DetailsStyle>
        <DetailsStyle
          sx={{
            marginBottom: 3,
          }}
        >
          <Typography variant="lg" sx={{ marginBottom: "12px" }}>
            <Localizer localeKey="STUDENT_DETAILS_FIELD" />
          </Typography>
          <Typography variant="md">{student.area.title}</Typography>
        </DetailsStyle>
        <DetailsStyle>
          <Typography variant="lg" sx={{ marginBottom: "12px" }}>
            <Localizer localeKey="STUDENT_DETAILS_EMAIL" />
          </Typography>
          <Typography variant="md">{student.user.email}</Typography>
        </DetailsStyle>
      </Box>
      <Box>
        <Avatar
          sx={{ width: "260px", height: "260px", marginBottom: 3 }}
          src={student.user.avatar}
        />
        <Typography variant="xl">
          {student.user.firstName + " " + student.user.lastName}
        </Typography>
      </Box>
    </Box>
  );
};
