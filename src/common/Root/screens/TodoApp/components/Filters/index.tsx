import React, { SFC } from "react";
import styled, { css } from "styled-components";

import { FilterTypes } from "../../types";
import { TFilterProps } from "./types";

const Input = styled.input`
  display: none;
  &:checked + label {
    color: rgba(0, 0, 0, 0.87);
    font-weight: bold;
  }
`;
const Label = styled.label`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.38);
  cursor: pointer;
  user-select: none;
`;

const Filters: SFC<TFilterProps> = ({ value, onFilterChange }) => {
  return (
    <div>
      <Input
        type="radio"
        name="filter"
        id="filter-all"
        data-filter={FilterTypes.SHOW_ALL}
        onChange={onFilterChange}
        checked={value === FilterTypes.SHOW_ALL}
      />
      <Label htmlFor="filter-all">Show all</Label>
      <Input
        type="radio"
        name="filter"
        id="filter-completed"
        data-filter={FilterTypes.SHOW_COMPLETED}
        onChange={onFilterChange}
        checked={value === FilterTypes.SHOW_COMPLETED}
      />
      <Label htmlFor="filter-completed">Show completed</Label>
      <Input
        type="radio"
        name="filter"
        id="filter-incomplete"
        data-filter={FilterTypes.SHOW_INCOMPLETE}
        onChange={onFilterChange}
        checked={value === FilterTypes.SHOW_INCOMPLETE}
      />
      <Label htmlFor="filter-incomplete">Show active</Label>
    </div>
  );
};

export default Filters;
