import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";
import { ProductList } from "./productList/ProductList";
import { Header } from "app/shared/header/Header";
import styled from "styled-components";
import { NoProducts } from "./productList/noProducts/NoProducts";
import { device } from "styles/breakpoints";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import { fetchProduct } from "store/product/ProductSlice";

export const Products = () => {
  const { product, loading } = useSelector((root: RootState) => root.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct("?limit=8&page=1&promo=false&active=false"));
  }, []);

  console.log(product, loading);

  return (
    <StyledProducts>
      {/* <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link> */}
      <Header />
      <StyledBody>
        {/* <NoProducts /> */}
        <ProductList products={product.items} />
      </StyledBody>
    </StyledProducts>
  );
};

const StyledProducts = styled.div`
  background-color: ${({ theme }) => theme.colors?.background};
  height: 100vh;
`;

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media ${device.laptop} {
    padding: 56px 108px;
  }
`;
