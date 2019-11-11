import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store';

import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import 'reset.css';

const history = createBrowserHistory();
const store = configureStore(history);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header />
      <App />
      <Footer />
    </ConnectedRouter>
  </Provider>
  , rootElement
);
