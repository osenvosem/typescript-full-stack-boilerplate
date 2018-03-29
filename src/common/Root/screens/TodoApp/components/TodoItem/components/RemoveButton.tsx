import React, { SFC, MouseEvent } from "react";
import styled from "styled-components";

import { TRemoveTodoHandler } from "../../../types";

const Button = styled.button`
  background: none;
  border: none;
  fill: #e0e0e0;
  &:hover {
    fill: ${props => props.theme.secondary};
  }
`;

const RemoveIcon: SFC<{
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.035 8l5.544 5.544a1.439 1.439 0 1 1-2.035 2.035L8 10.035l-5.544 5.544A1.439 1.439 0 1 1 .42 13.544L5.965 8 .421 2.456A1.439 1.439 0 1 1 2.456.42L8 5.965 13.544.421a1.439 1.439 0 1 1 2.035 2.035L10.035 8z"
          fillRule="evenodd"
        />
      </svg>
    </Button>
  );
};

export default RemoveIcon;
