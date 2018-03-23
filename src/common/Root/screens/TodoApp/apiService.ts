import axios from "axios";
import todos from "./todos";

const fakeDbRequest = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todos);
    }, 100);
  });
};

export const fetchTodos = () => {
  if (typeof window === "object") {
    return axios("/api/v1/todoapp").then(response => response.data);
  } else {
    return fakeDbRequest();
  }
};
