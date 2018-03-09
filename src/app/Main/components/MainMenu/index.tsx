import React from "react";
import { NavLink } from "react-router-dom";
import { IMenuItem } from "./interfaces";
import items from "./mainMenuItems.json";

const MainMenu = () => {
  return (
    <nav>
      {(items as IMenuItem[]).map(item => {
        return (
          <NavLink
            exact={item.path === "/"}
            to={item.path}
            key={item.path}
            activeStyle={{ fontWeight: "bold" }}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default MainMenu;
