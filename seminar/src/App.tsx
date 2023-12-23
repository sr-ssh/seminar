import "./App.css";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { FormControl, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { Layout } from "./components/Layout";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const App = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <FormControl variant="standard" />
          <Layout />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
