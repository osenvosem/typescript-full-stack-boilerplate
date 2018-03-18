import { TTodo, FilterTypes } from "./types";

export const filterTodos = (todos: TTodo[], filter: FilterTypes): TTodo[] => {
  switch (filter) {
    case FilterTypes.SHOW_ALL:
      return todos;
    case FilterTypes.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case FilterTypes.SHOW_INCOMPLETE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};
