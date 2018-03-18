import React, { SFC } from "react";
import { NavLink } from "react-router-dom";
import { TMainMenuProps } from "./types";

const MainMenu: SFC<TMainMenuProps> = ({ items }) => {
  return (
    <nav>
      {items.map(item => {
        return (
          <NavLink {...item} key={item.to} activeStyle={{ fontWeight: "bold" }}>
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default MainMenu;
