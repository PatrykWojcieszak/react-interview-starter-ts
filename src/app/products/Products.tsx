import { Header } from "app/shared/header/Header";
import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";

export const Products = () => {
  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
      <Header />
    </>
  );
};
