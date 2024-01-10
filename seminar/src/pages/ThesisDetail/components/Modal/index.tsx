import { Box, Button, Container, Typography, styled } from "@mui/material";
import { ModalComponent } from "../../../../components/Modal";
import { Localizer } from "../../../../hooks/useGlobalLocales/Localizer";

const ContainerStyle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 36,
  alignItems: "center",
  maxWidth: 800,
  width: 700,
  padding: "58px 68px",
  textAlign: "center",
});

const ThesisModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ModalComponent open={open} onClose={() => {}}>
      <ContainerStyle>
        <Typography variant="_2xl">
          <Localizer localeKey="THESIS_MODAL_RESIGN" />
        </Typography>
        <Box>
          <Typography variant="md">
            <Localizer localeKey="THESIS_MODAL_DESC_1" />
          </Typography>
          <Typography variant="md">
            <Localizer localeKey="THESIS_MODAL_DESC_2" />
          </Typography>
        </Box>
        <Box display={"flex"} gap={3} width={"100%"}>
          <Button
            variant="outlined"
            color="error"
            size="large"
            fullWidth
            onClick={() => setOpen(false)}
          >
            <Localizer localeKey="THESIS_MODAL_YES" />
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            fullWidth
            onClick={() => setOpen(false)}
          >
            <Localizer localeKey="THESIS_MODAL_NO" />
          </Button>
        </Box>
      </ContainerStyle>
    </ModalComponent>
  );
};

export default ThesisModal;
