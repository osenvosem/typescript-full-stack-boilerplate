import {
  TAddTodoActionCreator,
  TRemoveTodoActionCreator,
  TToggleTodoActionCreator,
  ActionTypes,
  FilterTypes,
  TFilterChangeActionCreator,
  ApiRequestTypes,
  TFetchRequestedActionCreator
} from "./types";

export const addTodo: TAddTodoActionCreator = (text, id) => {
  return {
    type: ActionTypes.ADD_TODO,
    text,
    id
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

export const fetchTodos: TFetchRequestedActionCreator = () => {
  return { type: ApiRequestTypes.TODOS_FETCH_REQUESTED };
};
