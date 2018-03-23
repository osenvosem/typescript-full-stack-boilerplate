import "babel-polyfill";
import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./common/Root/";
import configureStore from "./common/configureStore";

const isDev = process.env.NODE_ENV;

const store = configureStore(window.__INITIAL_STATE__ || {});

const RootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

const rootElement = document.body.querySelector("#root");

switch (process.env.NODE_ENV) {
  case "development":
    render(RootComponent, rootElement);
    break;
  case "production":
    hydrate(RootComponent, rootElement);
    break;
}
