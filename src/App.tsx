import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeContainer from './containers/HomeContainer';
import BbsContainer from './containers/BbsContainer';

const App: React.FC = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/'>
        <HomeContainer />
      </Route>
      <Route path="/thread/:id">
        <BbsContainer />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
