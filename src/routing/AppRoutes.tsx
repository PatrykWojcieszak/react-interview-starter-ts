import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AppRoute } from "./AppRoute.enum";

import { Spinner } from "app/shared/spinner/Spinner";

const Login = React.lazy(() => {
  return import("app/login/Login");
});

const Products = React.lazy(() => {
  return import("app/products/Products");
});

export const AppRoutes = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Switch>
        <Route path={AppRoute.home} exact render={() => <Products />} />
        <Route path={AppRoute.login} render={() => <Login />} />
        <Redirect to={AppRoute.home} />
      </Switch>
    </React.Suspense>
  );
};
