import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import userRoutes from "./userRoutes";
function initRoute(allRoutes) {
  let routes = [];
  Object.keys(allRoutes).forEach(function (key, i) {
    let item = allRoutes[key];
    if (item.component) {
      let RouteComponent = lazy(item.component);
      routes.push(
        <Route
          key={`${i}`}
          path={item.path}
          exact={!item.fatherExact}
          render={function (props) {
            //动态改变title
            if (item.title && window.location.hash.indexOf(item.path) > 0) {
              document.title = item.title;
            }
            return (
              <Suspense fallback="">
                <RouteComponent {...props} />
              </Suspense>
            );
          }}
        />
      );
    }
  });
  return routes;
}
export default (
  <Switch>
    {initRoute(userRoutes)}
    <Redirect to={"/404"} />
  </Switch>
);
