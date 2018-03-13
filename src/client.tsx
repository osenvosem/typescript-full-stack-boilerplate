import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./app/Main/";

const isDev = process.env.NODE_ENV;

const RootComponent = (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
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
