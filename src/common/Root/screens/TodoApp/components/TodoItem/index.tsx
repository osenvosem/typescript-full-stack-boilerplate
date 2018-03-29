import React, { SFC } from "react";
import styled, { css, ThemedStyledProps } from "styled-components";

import CompletedIcon from "./components/CompletedIcon";
import RemoveButton from "./components/RemoveButton";

import { TTodoItemProps } from "./types";
import { TTheme } from "../../../../../types";

const Section = styled.section`
  display: flex;
  align-items: center;
  height: 60px;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
`;

const Article = styled.article`
  flex-grow: 1;
  user-select: none;
  color: rgba(0, 0, 0, 0.87);
  // @ts-ignore
  ${(props: { completed: boolean }) =>
    props.completed &&
    css`
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.38);
      font-style: italic;
    `};
`;

const TodoItem: SFC<TTodoItemProps> = ({
  children,
  completed,
  onRemoveTodo,
  onToggleTodo,
  id
}) => {
  return (
    <Section
      onClick={e => {
        onToggleTodo(id, e);
      }}
    >
      <CompletedIcon completed={completed} />
      <Article completed={completed}>{children}</Article>
      <RemoveButton
        onClick={e => {
          e.stopPropagation();
          onRemoveTodo(id, e);
        }}
      />
    </Section>
  );
};

export default TodoItem;
