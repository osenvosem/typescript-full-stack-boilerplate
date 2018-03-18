import { TFilterChangeHandler, FilterTypes } from "../../types";

export interface TFilterProps {
  onFilterChange: TFilterChangeHandler;
  value: FilterTypes;
}
