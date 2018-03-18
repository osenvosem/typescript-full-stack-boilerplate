import React, { Component, SFC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import MainMenu from "./components/MainMenu/";
import NotFound from "components/NotFound";
import Home from "./screens/Home/";
import Todo from "./screens/TodoApp";

import mainMenuItems from "./mainMenuItems";

class Main extends Component {
  render() {
    return (
      <>
        <header>
          <MainMenu items={mainMenuItems} />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={Todo} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </>
    );
  }
}

export default hot(module)(Main);
