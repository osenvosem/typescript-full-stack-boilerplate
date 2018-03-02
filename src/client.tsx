import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./app/Main/";

render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.body.querySelector("#root")
);
