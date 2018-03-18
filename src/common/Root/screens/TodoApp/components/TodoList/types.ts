import { FormEvent, MouseEvent } from "react";
import {
  TTodo,
  TAddTodoHandler,
  TRemoveTodoHandler,
  TToggleTodoHandler
} from "../../types";

export interface TTodoListProps {
  todos: TTodo[];
  onAddTodo: TAddTodoHandler;
  onRemoveTodo: TRemoveTodoHandler;
  onToggleTodo: TToggleTodoHandler;
}
