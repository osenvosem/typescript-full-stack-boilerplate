import React, { SFC } from "react";
import { TTodoAddProps } from "./types";

const TodoInput: SFC<TTodoAddProps> = ({
  onButtonClick,
  onInputChange,
  inputValue
}) => {
  return (
    <>
      <input
        type="text"
        onChange={onInputChange}
        value={inputValue}
        onKeyUp={onInputChange}
      />
      <button onClick={onButtonClick}>Add</button>
    </>
  );
};

export default TodoInput;
