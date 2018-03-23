import {
  TTodoAppState,
  TTodo,
  TTodoActions,
  ActionTypes,
  FilterTypes,
  TFilterActions,
  TApiFetchActions,
  ApiRequestTypes
} from "./types";

export function filter(state: FilterTypes, action: TFilterActions) {
  return action.type;
}

export function todos(state: TTodo[], action: TTodoActions): TTodo[] {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const maxId = state.length ? Math.max(...state.map(todo => todo.id)) : 0;
      return [...state, { text: action.text, id: maxId + 1, completed: false }];
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

export function todosFetch(state: TTodoAppState, action: TApiFetchActions) {
  switch (action.type) {
    case ApiRequestTypes.TODOS_FETCH_REQUESTED:
      return { todosRequested: true };
    case ApiRequestTypes.TODOS_FETCH_SUCCEEDED:
      return { todos: action.todos, todosRequested: false };
    case ApiRequestTypes.TODOS_FETCH_FAILED:
      return { todosRequested: false, error: action.error };
    default:
      return state;
  }
}

export default function todoAppReducer(
  state: TTodoAppState = {
    todos: [],
    filter: FilterTypes.SHOW_ALL,
    todosRequested: false
  },
  action: TTodoActions | any // solves the issue with combineReducers
) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
    case ActionTypes.REMOVE_TODO:
    case ActionTypes.TOGGLE_TODO:
      return { ...state, todos: todos(state.todos, action) };
    case FilterTypes.SHOW_COMPLETED:
    case FilterTypes.SHOW_INCOMPLETE:
    case FilterTypes.SHOW_ALL:
      return { ...state, filter: filter(state.filter, action) };
    case ApiRequestTypes.TODOS_FETCH_REQUESTED:
    case ApiRequestTypes.TODOS_FETCH_SUCCEEDED:
    case ApiRequestTypes.TODOS_FETCH_FAILED:
      return { ...state, ...todosFetch(state, action) };
    default:
      return state;
  }
}
