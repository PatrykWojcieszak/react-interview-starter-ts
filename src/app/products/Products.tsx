import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";
import { ProductList } from "./productList/ProductList";
import { Header } from "app/shared/header/Header";
import styled from "styled-components";

export const Products = () => {
  return (
    <StyledProducts>
      {/* <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link> */}
      <Header />
      <ProductList />
    </StyledProducts>
  );
};

const StyledProducts = styled.div`
  background-color: ${({ theme }) => theme.colors?.background};
  height: 100%;
`;
