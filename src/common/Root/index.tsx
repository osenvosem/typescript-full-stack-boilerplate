import React, { Component, SFC } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";
import styled, { ThemeProvider } from "styled-components";

import MainMenu from "./components/MainMenu/";
import NotFound from "components/NotFound";
import Home from "./screens/Home/";
import Todo from "./screens/TodoApp";

import mainMenuItems from "./mainMenuItems";
import theme from "../theme";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: ${props => props.theme.dark};
`;

const Main = styled.main`
  width: 600px;
  margin: 20px auto 0 auto;
`;

class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Header>
            <MainMenu items={mainMenuItems} />
          </Header>
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todo" component={Todo} />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </>
      </ThemeProvider>
    );
  }
}

export default hot(module)(Root);
