import React, { SFC, CSSProperties } from "react";
import {
  Route,
  NavLink,
  Switch,
  RouteComponentProps,
  Redirect
} from "react-router-dom";

import Cats from "./screens/Cats";
import Dogs from "./screens/Dogs";
import Hamsters from "./screens/Hamsters";

import NotFound from "components/NotFound";

const navLinkActiveStyle: CSSProperties = {
  fontWeight: "bold",
  textDecoration: "none"
};

const Animals: SFC<RouteComponentProps<{}>> = ({ match }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to={`${match.url}/cats`}
              activeStyle={navLinkActiveStyle}
            >
              Cats
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={`${match.url}/dogs`}
              activeStyle={navLinkActiveStyle}
            >
              Dogs
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={`${match.url}/hamsters`}
              activeStyle={navLinkActiveStyle}
            >
              Hamsters
            </NavLink>
          </li>
        </ul>
      </nav>
      <article>
        <Switch>
          <Redirect exact from={match.url} to={`${match.url}/cats`} />
          <Route exact path={`${match.url}/cats`} component={Cats} />
          <Route exact path={`${match.url}/dogs`} component={Dogs} />
          <Route exact path={`${match.url}/hamsters`} component={Hamsters} />
          <Route component={NotFound} />
        </Switch>
      </article>
    </>
  );
};

export default Animals;
