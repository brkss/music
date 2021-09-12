import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./utils/config/routes";
import { Box } from "@chakra-ui/react";

export const Application: React.FC = () => {
  return (
    <Box minH={"100vh"} bg={"#000"} color={"#ff5a63"}>
      <Box m={"auto"} w={{ base: "100%", md: "70%", lg: "50%" }}>
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
      </Box>
    </Box>
  );
};
