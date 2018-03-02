import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IRedirectWithStatusProps } from "./interfaces";

const RedirectWithStatus = (props: IRedirectWithStatusProps) => {
  const { from, to, status } = props;
  console.log("From RedirectWithStatus!!!");

  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = status;
        }
        return <Redirect from={from} to={to} />;
      }}
    />
  );
};

export default RedirectWithStatus;
