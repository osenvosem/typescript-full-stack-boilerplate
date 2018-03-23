import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";

import todoApp from "./Root/screens/TodoApp/reducer";

import { TRootState } from "./types";

export default function configureStore(defaultState?: TRootState) {
  const rootReducer = combineReducers({ todoApp });
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [];

  enhancers.push(applyMiddleware(sagaMiddleware));

  if (
    typeof window === "object" &&
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    rootReducer,
    defaultState || {},
    compose(...enhancers)
  );
  // @ts-ignore
  store.runSaga = sagaMiddleware.run;
  // @ts-ignore
  store.close = () => store.dispatch(END);
  return store;
}
