import "./App.css";
import "./styles/fonts.css";
import "./styles/reset.css";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { Layout } from "./components/Layout";
import { theme } from "./utils/theme";
import { Persistor, Store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const App = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <ThemeProvider theme={theme}>
            <div className="App">
              <Layout />
            </div>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </CacheProvider>
  );
};

export default App;
