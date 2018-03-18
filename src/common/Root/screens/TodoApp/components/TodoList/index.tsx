import React, { SFC } from "react";
import { TTodoListProps } from "./types";
import TodoItem from "../TodoItem";

const TodoList: SFC<TTodoListProps> = ({
  todos,
  onRemoveTodo,
  onToggleTodo
}) => {
  return (
    <>
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
            id={todo.id}
          >
            {todo.text}
          </TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoList;
