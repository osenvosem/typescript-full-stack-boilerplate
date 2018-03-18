import { TMenuItem } from "./components/MainMenu/types";

const mainMenuItems: TMenuItem[] = [
  {
    title: "Home",
    to: "/",
    exact: true
  },
  {
    title: "Todo App",
    to: "/todo"
  }
];

export default mainMenuItems;
