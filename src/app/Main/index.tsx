import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import MainMenu from "./components/MainMenu/";
import Home from "./screens/Home/";
import About from "./screens/About";
import Dogs from "./screens/Dogs";
import Cats from "./screens/Cats";
import Spiders from "./screens/Spiders";
import RedirectWithStatus from "../shared/components/RedirectWithStatus";

import mainMenuItems from "./main-menu-items.json";

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
            <Route path="/dogs" component={Dogs} />
            <Route path="/cats" component={Cats} />
            <Route path="/spiders" component={Spiders} />
            <Route path="/about" component={About} />
            <RedirectWithStatus from="/red" to="/about" status={302} />
          </Switch>
        </main>
      </>
    );
  }
}

export default hot(module)(Main);
