import React, { SFC } from "react";
import styled from "styled-components";

import { TTodoListProps } from "./types";
import TodoItem from "../TodoItem";

const Section = styled.section`
  width: 600px;
  margin-top: 16px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 6px 16px #efefef;
  padding: 0 16px;
`;

const TodoList: SFC<TTodoListProps> = ({
  todos,
  onRemoveTodo,
  onToggleTodo
}) => {
  return (
    <Section>
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
    </Section>
  );
};

export default TodoList;
