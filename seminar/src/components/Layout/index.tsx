import { Box } from "@mui/material";
import { Routing } from "../../routes";
import { Header } from "../Header";
import { getAuthorizationURL } from "../../utils/getAuthorizationURL";

export const Layout = () => {
  return (
    <div>
      {!getAuthorizationURL() && <Header />}
      <Box
        sx={[
          { position: "relative" },
          !getAuthorizationURL() && { top: "72px" },
        ]}
      >
        <Routing />
      </Box>
    </div>
  );
};
