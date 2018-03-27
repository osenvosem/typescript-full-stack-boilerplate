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

export interface TTheme {
  readonly primary: string;
  readonly secondary: string;
  readonly tertiary: string;
  readonly dark: string;
  readonly grey50: string;
  readonly grey200: string;
  readonly grey300: string;
}
