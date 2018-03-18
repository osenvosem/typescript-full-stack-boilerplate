import React, { SFC } from "react";

import { TTodoItemProps } from "./types";

const TodoItem: SFC<TTodoItemProps> = ({
  children,
  completed,
  onRemoveTodo,
  onToggleTodo,
  id
}) => {
  return (
    <article
      onClick={e => {
        onToggleTodo(id, e);
      }}
    >
      <span>
        <span>{completed ? "✓" : null}</span>
        <span>{children}</span>
      </span>
      <span
        onClick={e => {
          e.stopPropagation();
          onRemoveTodo(id, e);
        }}
      >
        ╳
      </span>
    </article>
  );
};

export default TodoItem;
