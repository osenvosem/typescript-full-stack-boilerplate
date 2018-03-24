import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";

import * as api from "./apiService";
import {
  ApiRequestTypes,
  TAddTodoAction,
  ActionTypes,
  TRemoveTodoAction,
  TToggleTodoAction
} from "./types";

export function* fetchTodos() {
  try {
    const todos = yield call(api.fetchTodos);
    yield put({ type: ApiRequestTypes.TODOS_FETCH_SUCCEEDED, todos });
  } catch (error) {
    yield put({ type: ApiRequestTypes.TODOS_FETCH_FAILED, error });
  }
}

export function* postTodo(action: TAddTodoAction) {
  try {
    const { id, text } = action;
    yield call(api.postTodo, { id, text, completed: false });
    yield put({ type: ApiRequestTypes.POST_TODO_SUCCEEDED });
  } catch (error) {
    yield put({ type: ApiRequestTypes.POST_TODO_FAILED, error });
  }
}

export function* removeTodo(action: TRemoveTodoAction) {
  try {
    const { id } = action;
    yield call(api.removeTodo, id);
    yield put({ type: ApiRequestTypes.REMOVE_TODO_SUCCEEDED });
  } catch (error) {
    yield put({ type: ApiRequestTypes.REMOVE_TODO_FAILED, error });
  }
}

export function* changeCompleted(action: TToggleTodoAction) {
  try {
    const { id } = action;
    yield call(api.changeCompleted, id);
    yield put({ type: ApiRequestTypes.CHANGE_COMPLETED_SUCCEEDED });
  } catch (error) {
    yield put({ type: ApiRequestTypes.CHANGE_COMPLETED_FAILED, error });
  }
}

export default function* todoAppSaga() {
  yield all([
    takeLatest(ApiRequestTypes.TODOS_FETCH_REQUESTED, fetchTodos),
    takeEvery(ActionTypes.ADD_TODO, postTodo),
    takeEvery(ActionTypes.REMOVE_TODO, removeTodo),
    takeEvery(ActionTypes.TOGGLE_TODO, changeCompleted)
  ]);
}
