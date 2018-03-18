import {
  TTodo,
  TTodoActions,
  ActionTypes,
  FilterTypes,
  TFilterActions
} from "./types";
import { TTodoAppState } from "../../../types";

export function filter(state: FilterTypes, action: TFilterActions) {
  return action.type;
}

export function todos(state: TTodo[], action: TTodoActions) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const maxId = state.length ? Math.max(...state.map(todo => todo.id)) : 0;
      return [...state, { text: action.text, id: maxId + 1 }];
    case ActionTypes.REMOVE_TODO:
      const idx = state.findIndex(todo => todo.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case ActionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
}

export default function todoAppReducer(
  state: TTodoAppState = { todos: [], filter: FilterTypes.SHOW_ALL },
  action: TTodoActions | any // solves the issue with combineReducers
) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
    case ActionTypes.REMOVE_TODO:
    case ActionTypes.TOGGLE_TODO:
      return { todos: todos(state.todos, action), filter: state.filter };
    case FilterTypes.SHOW_COMPLETED:
    case FilterTypes.SHOW_INCOMPLETE:
    case FilterTypes.SHOW_ALL:
      return { todos: state.todos, filter: filter(state.filter, action) };
    default:
      return state;
  }
}
