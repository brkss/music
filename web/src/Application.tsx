import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./utils/config/routes";

export const Application: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, key) => (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <route.component
                  {...props}
                  {...route.props}
                  name={route.name}
                />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};
