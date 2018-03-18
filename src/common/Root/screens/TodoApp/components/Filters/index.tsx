import React, { SFC } from "react";
import { FilterTypes } from "../../types";
import { TFilterProps } from "./types";

const Filters: SFC<TFilterProps> = ({ value, onFilterChange }) => {
  return (
    <div>
      <fieldset>
        <legend>Filters:</legend>
        <input
          type="radio"
          name="filter"
          id="filter-all"
          data-filter={FilterTypes.SHOW_ALL}
          onChange={onFilterChange}
          checked={value === FilterTypes.SHOW_ALL}
        />
        <label htmlFor="filter-all">Show all</label>
        <input
          type="radio"
          name="filter"
          id="filter-completed"
          data-filter={FilterTypes.SHOW_COMPLETED}
          onChange={onFilterChange}
          checked={value === FilterTypes.SHOW_COMPLETED}
        />
        <label htmlFor="filter-completed">Show completed</label>
        <input
          type="radio"
          name="filter"
          id="filter-incomplete"
          data-filter={FilterTypes.SHOW_INCOMPLETE}
          onChange={onFilterChange}
          checked={value === FilterTypes.SHOW_INCOMPLETE}
        />
        <label htmlFor="filter-incomplete">Show incomplete</label>
      </fieldset>
    </div>
  );
};

export default Filters;

// show completed
// show uncompleted
// show all
