import { TTheme } from "../../../types";

export interface TMenuItem {
  title: string;
  to: string;
  exact?: boolean;
}

export interface TMainMenuProps {
  items: TMenuItem[];
  theme: TTheme;
}
