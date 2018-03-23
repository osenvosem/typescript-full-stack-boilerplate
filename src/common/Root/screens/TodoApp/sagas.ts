import { takeLatest, call, put } from "redux-saga/effects";

import * as api from "./apiService";
import { ApiRequestTypes } from "./types";

export function* fetchTodos() {
  try {
    const todos = yield call(api.fetchTodos);
    yield put({ type: ApiRequestTypes.TODOS_FETCH_SUCCEEDED, todos });
  } catch (e) {
    yield put({ type: ApiRequestTypes.TODOS_FETCH_FAILED, error: e });
  }
}

export default function* requestTodos() {
  yield takeLatest(ApiRequestTypes.TODOS_FETCH_REQUESTED, fetchTodos);
}
