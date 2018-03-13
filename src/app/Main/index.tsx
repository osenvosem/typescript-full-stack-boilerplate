import React, { Component, SFC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import Loadable, { LoadingComponentProps } from "react-loadable";

import MainMenu from "./components/MainMenu/";
import NotFound from "components/NotFound";

import Home from "./screens/Home/";
import About from "./screens/About";

import mainMenuItems from "./main-menu-items.json";

const Loading: SFC<LoadingComponentProps> = ({ error, pastDelay }) => {
  if (error) {
    return <div>Error...</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

const LoadableAnimals = Loadable({
  loader: () => import("./screens/Animals"),
  loading: Loading,
  delay: 100
});

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
            <Route path="/animals" component={LoadableAnimals} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </>
    );
  }
}

export default hot(module)(Main);
