import { routerMiddleware, connectRouter } from 'connected-react-router';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { History } from 'history';
// import createSagaMiddleware from 'redux-saga';
import { bbsReducer, BbsState } from './reducers/Bbs';

export type AppState = {
  router: any,
  bbs: BbsState
};

const configureStore = (history: History) => {
  const rootReducer = combineReducers<AppState>({
    router: connectRouter(history),
    bbs: bbsReducer
  });
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
      )
    )
  );

  return store;
};

export default configureStore;
