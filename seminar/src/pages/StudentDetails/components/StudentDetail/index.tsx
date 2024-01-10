import { Avatar, Box, Typography, styled } from "@mui/material";
import { Localizer } from "../../../../hooks/useGlobalLocales/Localizer";

interface Props {}

const DetailsStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
});

export const StudentDetail: React.FC<Props> = () => {
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
          <Typography variant="md">810198543</Typography>
        </DetailsStyle>
        <DetailsStyle
          sx={{
            marginBottom: 3,
          }}
        >
          <Typography variant="lg" sx={{ marginBottom: "12px" }}>
            <Localizer localeKey="STUDENT_DETAILS_SUPERVISOR" />
          </Typography>
          <Typography variant="md">810198543</Typography>
        </DetailsStyle>
        <DetailsStyle
          sx={{
            marginBottom: 3,
          }}
        >
          <Typography variant="lg" sx={{ marginBottom: "12px" }}>
            <Localizer localeKey="STUDENT_DETAILS_FIELD" />
          </Typography>
          <Typography variant="md">810198543</Typography>
        </DetailsStyle>
        <DetailsStyle>
          <Typography variant="lg" sx={{ marginBottom: "12px" }}>
            <Localizer localeKey="STUDENT_DETAILS_EMAIL" />
          </Typography>
          <Typography variant="md">810198543</Typography>
        </DetailsStyle>
      </Box>
      <Box>
        <Avatar
          sx={{ width: "260px", height: "260px", marginBottom: 3 }}
          src="https://www.google.com/logos/doodles/2024/new-years-day-2024-6753651837110174-la202124.gif"
        />
        <Typography variant="xl">hossein rahimi</Typography>
      </Box>
    </Box>
  );
};
