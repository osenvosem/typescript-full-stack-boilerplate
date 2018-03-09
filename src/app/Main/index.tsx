import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import MainMenu from "./components/MainMenu/";
import NotFound from "components/NotFound";

import Home from "./screens/Home/";
import About from "./screens/About";
import Animals from "./screens/Animals";

import mainMenuItems from "./main-menu-items.json";

class Main extends Component {
  render() {
    return (
      <>
        <header>
          <MainMenu />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/animals" component={Animals} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </>
    );
  }
}

export default hot(module)(Main);
