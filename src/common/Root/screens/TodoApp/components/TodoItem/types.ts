import { TToggleTodoHandler, TRemoveTodoHandler } from "../../types";

export interface TTodoItemProps {
  completed: boolean;
  id: number;
  children: string;
  onRemoveTodo: TRemoveTodoHandler;
  onToggleTodo: TToggleTodoHandler;
}
