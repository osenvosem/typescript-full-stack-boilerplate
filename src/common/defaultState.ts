import { FilterTypes } from "./Root/screens/TodoApp/types";

const defaultState = {
  todoApp: {
    todos: [
      { text: "Do something.", completed: false, id: 1 },
      { text: "Do something else.", completed: false, id: 2 },
      { text: "Wait a little and do more.", completed: true, id: 3 }
    ],
    filter: FilterTypes.SHOW_ALL
  }
};

export default defaultState;
