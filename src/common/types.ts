import { Store } from "redux";
import { Task, END } from "redux-saga";
import { TTodoAppState } from "./Root/screens/TodoApp/types";

export interface TRootState {
  todoApp: TTodoAppState;
}

export interface CustomStore<T> extends Store<T> {
  runSaga: (saga: () => Iterator<any>) => Task;
  close: () => END;
}
