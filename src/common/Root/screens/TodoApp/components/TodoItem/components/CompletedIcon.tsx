import React, { SFC } from "react";
import styled from "styled-components";

const Span = styled.span`
  margin-right: 16px;
`;

const CompletedIcon: SFC<{ completed: boolean }> = ({ completed }) => {
  const checked = (
    <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
      <g
        transform="translate(2 2)"
        stroke="#76C4D4"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      >
        <circle cx="15" cy="15" r="15" />
        <path strokeLinecap="round" d="M9 15.263L12.639 19l7.79-8" />
      </g>
    </svg>
  );

  const unchecked = (
    <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="15"
        cy="15"
        r="15"
        transform="translate(2 2)"
        stroke="#EEE"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );

  return <Span>{completed ? checked : unchecked}</Span>;
};

export default CompletedIcon;
