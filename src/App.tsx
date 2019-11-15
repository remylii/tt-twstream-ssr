import React from "react";
import { Route, Switch } from "react-router";
import HomeContainer from "./containers/HomeContainer";
import BbsContainer from "./containers/BbsContainer";
import styled from "styled-components";
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps
} from "@material-ui/system";

const Box = styled.div<PaletteProps & SpacingProps>`
  ${palette}
  ${spacing}
`;

const App: React.FC = () => (
  <Box p={2}>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/thread/:id" component={BbsContainer} />
    </Switch>
  </Box>
);

export default App;
