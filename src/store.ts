import { routerMiddleware, connectRouter } from "connected-react-router";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { History } from "history";
import createSagaMiddleware from "redux-saga";
import { bbsReducer, BbsState } from "./reducers/Bbs";
import { commentReducer, CommentState } from "./reducers/Comment";

export type AppState = {
  router: any;
  bbs: BbsState;
  comments: CommentState;
};

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = (history: History) => {
  const rootReducer = combineReducers<AppState>({
    router: connectRouter(history),
    bbs: bbsReducer,
    comments: commentReducer
  });
  const store = createStore(
    rootReducer,
    // compose(applyMiddleware(routerMiddleware(history)))
    composeReduxDevToolsEnhancers(applyMiddleware(routerMiddleware(history)))
  );

  return store;
};

export default configureStore;
