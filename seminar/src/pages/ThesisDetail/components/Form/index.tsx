import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Localizer } from "../../../../hooks/useGlobalLocales/Localizer";
import ThesisModal from "../Modal";
import UseApi from "../../../../hooks/useApi";
import { UNIVERSITY_URL } from "../../../../constants/global";
import { useSelector } from "react-redux";
import { userSelectors } from "../../../../store/user/selector";
import LoadingButton from "../../../../components/LoadingButton";

const FileInput = styled.input({ display: "none" });

const ThesisForm = ({ id }: { id: number }) => {
  const [hasSignUp, setHasSignUp] = useState(false);
  const [file, setFile] = useState<File>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { apiCall } = UseApi();
  const user = useSelector(userSelectors.user).id;

  const handleUpload = () => {
    // Trigger the file input click event
    fileInputRef.current?.click();
  };

  const registerThesis = async (data: string) => {
    await new Promise((resolve) =>
      apiCall({
        url: UNIVERSITY_URL.THESIS_REGISTER + "/",
        query: { student: user, thesis: id },
        method: "post",
        successCallback: () => {
          setHasSignUp(true);
          resolve("");
        },
      }),
    );
  };

  return (
    <>
      {hasSignUp ? (
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Box display={"flex"} alignItems={"flex-start"}>
            <Button
              variant="outlined"
              size="large"
              sx={{ marginInlineEnd: "34px", width: 265 }}
            >
              <Localizer localeKey="THESIS_DOWNLOAD_FORM_BUTTON" />
            </Button>
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Button
                variant="outlined"
                size="large"
                sx={{ width: 265 }}
                onClick={handleUpload}
              >
                <Localizer localeKey="THESIS_UPLOAD_FORM_BUTTON" />
                <FileInput
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => setFile(e.target.files?.[0])}
                />
              </Button>
              {file && (
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography variant="xs">
                    <Localizer localeKey="THESIS_UPLOADED_DOCS" />
                  </Typography>
                  <Box display={"flex"} alignItems={"flex-end"}>
                    <Typography variant="xs" color={"#8490F9"}>
                      {file.name}
                    </Typography>
                    <img src="/assets/images/upload.svg" alt="upload" />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
          {!file && (
            <Button
              variant="text"
              size="large"
              color="error"
              sx={{ width: 265 }}
              onClick={() => setOpenModal(true)}
            >
              <Localizer localeKey="THESIS_RESIGN_BUTTON" />
            </Button>
          )}
        </Box>
      ) : (
        <Box>
          <LoadingButton
            buttonProps={{
              variant: "contained",
              size: "large",
              sx: { marginInlineEnd: "34px", width: 265 },
            }}
            onSubmit={registerThesis}
          >
            <Localizer localeKey="THESIS_SIGNUP" />
          </LoadingButton>
          <Typography variant="lg" fontWeight={500}>
            <Localizer localeKey="THESIS_REMAIN_CAPACITY" />
          </Typography>
          <Typography variant="lg" fontWeight={400}>
            10 <Localizer localeKey="THESIS_REMAIN_UNIT" />
          </Typography>
        </Box>
      )}
      <ThesisModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default ThesisForm;
