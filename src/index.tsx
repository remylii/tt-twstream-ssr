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
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Container from "@material-ui/core/Container";

const history = createBrowserHistory();
const store = configureStore(history);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Header />
          <App />
          <Footer />
        </Container>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  rootElement
);
