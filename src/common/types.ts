import { TTodo } from "./Root/screens/TodoApp/types";
import { FilterTypes } from "./Root/screens/TodoApp/types";

export interface TRootState {
  todoApp: TTodoAppState;
}

export interface TTodoAppState {
  todos: TTodo[];
  filter: FilterTypes;
}
