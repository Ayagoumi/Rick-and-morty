import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import { configureAppStore } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const MOUNT_NODE = document.getElementById("root") as HTMLElement;
export const store = configureAppStore();

ReactDOMClient.createRoot(MOUNT_NODE!).render(
  <ThemeConfig>
    <BrowserRouter>
      <Provider store={store}>
        <HelmetProvider>
          <CssBaseline />
          <GlobalStyles />
          <App />
        </HelmetProvider>
      </Provider>
    </BrowserRouter>
  </ThemeConfig>
);
