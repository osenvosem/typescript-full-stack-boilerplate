import React, { SFC, ReactNode } from "react";
import { Route } from "react-router-dom";

interface INotFoundProps {
  children?: ReactNode;
}

const NotFound: SFC<INotFoundProps> = ({ children }) => {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.code = 404;
        return (
          <article>
            <h1>Page not found.</h1>
            {children}
          </article>
        );
      }}
    />
  );
};

export default NotFound;
