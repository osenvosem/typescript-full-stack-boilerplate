import React, { SFC } from "react";
import styled from "styled-components";

import { TActiveItemsCountProps } from "./types";

const Span = styled.span`
  color: rgba(0, 0, 0, 0.87);
`;

const ActiveItemsCount: SFC<TActiveItemsCountProps> = ({ itemsLeft }) => {
  return (
    <Span>
      {itemsLeft} {itemsLeft > 1 ? "items" : "item"} left
    </Span>
  );
};

export default ActiveItemsCount;
