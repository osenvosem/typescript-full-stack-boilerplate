import { FormEvent, MouseEvent, KeyboardEvent, ChangeEvent } from "react";
import { RouteComponentProps } from "react-router-dom";

export interface TTodo {
  readonly text: string;
  readonly completed: boolean;
  readonly id: number;
}

export interface TTodoAppProps extends RouteComponentProps<{}> {
  readonly todos: TTodo[];
  readonly filter: FilterTypes;
  readonly addTodo: (text: string) => TAddTodoAction;
  readonly removeTodo: (id: number) => TRemoveTodoAction;
  readonly toggleTodo: (id: number) => TToggleTodoAction;
  readonly changeFilter: (filter: string) => TFilterActions;
}

export interface TTodoAppState {
  readonly inputValue: string;
}

// Actions

export enum ActionTypes {
  ADD_TODO = "todoApp/ADD_TODO",
  REMOVE_TODO = "todoApp/REMOVE_TODO",
  TOGGLE_TODO = "todoApp/TOGGLE_TODO"
}

export interface TAddTodoAction {
  readonly type: typeof ActionTypes.ADD_TODO;
  readonly text: string;
}

export interface TRemoveTodoAction {
  readonly type: typeof ActionTypes.REMOVE_TODO;
  readonly id: number;
}

export interface TToggleTodoAction {
  readonly type: typeof ActionTypes.TOGGLE_TODO;
  readonly id: number;
}

export type TTodoActions =
  | TAddTodoAction
  | TRemoveTodoAction
  | TToggleTodoAction;

// Action creators

export interface TAddTodoActionCreator {
  (text: string): TAddTodoAction;
}

export interface TRemoveTodoActionCreator {
  (id: number): TRemoveTodoAction;
}

export interface TToggleTodoActionCreator {
  (id: number): TToggleTodoAction;
}

// Handlers

export interface TAddTodoHandler {
  (e: FormEvent<HTMLButtonElement>): void;
}

export interface TRemoveTodoHandler {
  (id: number, e: MouseEvent<HTMLSpanElement>): void;
}

export interface TToggleTodoHandler {
  (id: number, e: FormEvent<HTMLElement>): void;
}

export interface TInputChangeHandler {
  (e: ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>): void;
}

// filters

export enum FilterTypes {
  SHOW_COMPLETED = "todoApp/SHOW_COMPLETED",
  SHOW_INCOMPLETE = "todoApp/SHOW_INCOMPLETE",
  SHOW_ALL = "todoApp/SHOW_ALL"
}

export interface TFilterActions {
  type: FilterTypes;
}

export interface TFilterChangeHandler {
  (e: ChangeEvent<HTMLInputElement>): void;
}

export interface TFilterChangeActionCreator {
  (filter: FilterTypes): TFilterActions;
}
