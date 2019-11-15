import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import configureStore from "./store";

import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "reset.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import styled, { ThemeProvider } from "styled-components";
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps
} from "@material-ui/system";

const Box = styled.div<PaletteProps & SpacingProps & TypographyProps>`
  ${palette}
  ${spacing}
  ${typography}
`;

const history = createBrowserHistory();
const store = configureStore(history);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          color="primary.main"
          bgcolor="background.paper"
          fontFamily="h6.fontFamily"
        >
          <Header />
          <App />
          <Footer />
        </Box>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  rootElement
);
