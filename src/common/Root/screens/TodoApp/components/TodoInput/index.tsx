import React, { SFC } from "react";
import styled from "styled-components";

import { TTodoAddProps } from "./types";

const Form = styled.form`
  display: flex;
  box-shadow: 0 4px 16px #efefef;
`;

const Input = styled.input`
  flex: 1;
  box-sizing: border-box;
  padding-left: 16px;
  height: 48px;
  background-color: white;
  border: none;
  border-radius: 12px 0 0 12px;
  font-size: 1rem;
  &::placeholder {
    font-style: italic;
    color: ${props => props.theme.grey300};
  }
`;

const Button = styled.button`
  height: 48px;
  width: 82px;
  background-color: ${props => props.theme.primary};
  border: none;
  border-radius: 0 12px 12px 0;
  font-size: 1rem;
  color: white;
  &:hover {
    opacity: 0.8;
    box-shadow: 0px 4px 16px ${props => props.theme.grey300};
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0 0 0 200px rgba(0, 0, 0, 0.1);
  }
`;

const TodoInput: SFC<TTodoAddProps> = ({
  onButtonClick,
  onInputChange,
  inputValue
}) => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Input
        type="text"
        onChange={onInputChange}
        value={inputValue}
        onKeyUp={onInputChange}
        placeholder="Enter todo text..."
      />
      <Button onClick={onButtonClick}>Add</Button>
    </Form>
  );
};

export default TodoInput;
