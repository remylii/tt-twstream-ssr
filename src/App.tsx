import React from 'react';
import { Route, Switch } from 'react-router';
import HomeContainer from './containers/HomeContainer';
import BbsContainer from './containers/BbsContainer';

const App: React.FC = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ HomeContainer } />
      <Route path="/thread/:id" component={ BbsContainer } />
    </Switch>
  </div>
);

export default App;
