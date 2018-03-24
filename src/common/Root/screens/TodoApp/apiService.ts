import axios from "axios";

import todos from "./todos";
import { TTodo } from "./types";

const todoApi = axios.create({ baseURL: "/api/v1/todoapp" });

const fakeDbRequest = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todos);
    }, 100);
  });
};

export const fetchTodos = () => {
  if (typeof window === "object") {
    return todoApi.get("/").then(response => response.data);
  } else {
    return fakeDbRequest();
  }
};

export const postTodo = (todo: TTodo) => {
  return todoApi.post("/", todo).then(response => response.data);
};

export const removeTodo = (id: number) => {
  return todoApi.delete(`/${id}`);
};

export const changeCompleted = (id: number) => {
  return todoApi.patch(`/${id}`);
};
