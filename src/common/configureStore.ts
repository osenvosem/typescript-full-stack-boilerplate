import { createStore, combineReducers, compose } from "redux";

import todoApp from "./Root/screens/TodoApp/reducer";

import { TRootState } from "./types";

const rootReducer = combineReducers({ todoApp });

export default function configureStore(defaultState: TRootState) {
  const enhancers = [];

  if (
    typeof window === "object" &&
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore(rootReducer, defaultState, compose(...enhancers));
}
