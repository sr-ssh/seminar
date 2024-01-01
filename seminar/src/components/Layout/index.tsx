import { Box } from "@mui/material";
import { Routing } from "../../routes";
import { Header } from "../Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Box sx={{ position: "relative", top: "104px" }}>
        <Routing />
      </Box>
    </div>
  );
};
