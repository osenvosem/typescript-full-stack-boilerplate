import { TAddTodoHandler, TInputChangeHandler } from "../../types";

export interface TTodoAddProps {
  onButtonClick: TAddTodoHandler;
  onInputChange: TInputChangeHandler;
  inputValue: string;
}
