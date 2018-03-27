import React, { SFC } from "react";
import { NavLink } from "react-router-dom";
import styled, { withTheme } from "styled-components";

import { TMainMenuProps } from "./types";

const Nav = styled.nav`
  > a {
    color: white;
    margin-right: 10px;
    text-decoration: none;
    opacity: 0.7;
    font-weight: 400;
    padding: 0 0 4px 0;
  }
`;

const MainMenu: SFC<TMainMenuProps> = ({ items, theme }) => {
  return (
    <Nav>
      {items.map(item => {
        return (
          <NavLink
            {...item}
            key={item.to}
            activeStyle={{
              fontWeight: 500,
              borderBottom: `3px solid ${theme.primary}`,
              opacity: 1
            }}
          >
            {item.title}
          </NavLink>
        );
      })}
    </Nav>
  );
};

export default withTheme(MainMenu);
