import React from "react";
import { Link } from "react-router-dom";
import { IMainMenuProps } from "./interfaces";

const MainMenu = (props: IMainMenuProps) => {
  return (
    <nav>
      {props.items.map(item => {
        return (
          <Link to={item.path} key={item.path}>
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainMenu;
