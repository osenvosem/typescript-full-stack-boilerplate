import {
  TAddTodoActionCreator,
  TRemoveTodoActionCreator,
  TToggleTodoActionCreator,
  ActionTypes,
  FilterTypes,
  TFilterChangeActionCreator
} from "./types";

export const addTodo: TAddTodoActionCreator = text => {
  return {
    type: ActionTypes.ADD_TODO,
    text
  };
};

export const removeTodo: TRemoveTodoActionCreator = id => {
  return {
    type: ActionTypes.REMOVE_TODO,
    id
  };
};

export const toggleTodo: TToggleTodoActionCreator = id => {
  return {
    type: ActionTypes.TOGGLE_TODO,
    id
  };
};

export const changeFilter: TFilterChangeActionCreator = filter => {
  return { type: filter };
};
