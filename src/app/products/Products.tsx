import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "routing/AppRoute.enum";
import { ProductList } from "./productList/ProductList";
import { Header } from "app/shared/header/Header";
import styled from "styled-components";
import { NoProducts } from "./productList/noProducts/NoProducts";
import { device } from "styles/breakpoints";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import { fetchProduct } from "store/product/ProductsSlice";
import { Filtering } from "app/shared/filtering/Filtering";
import { Pagination } from "app/shared/pagination/Pagination";

export const Products = () => {
  const [isPromo, setIsPromo] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const { products, loading } = useSelector((root: RootState) => root.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = `?search=${searchValue}&limit=8&page=${selectedPage}&promo=${isPromo}&active=${isActive}`;

    dispatch(fetchProduct(params));
  }, [searchValue, isPromo, isActive, selectedPage]);

  return (
    <StyledProducts>
      {/* <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link> */}
      <Header>
        <Filtering
          isActive={isActive}
          isPromo={isPromo}
          isActiveHandler={(checked: boolean) => setIsActive(checked)}
          isPromoHandler={(checked: boolean) => setIsPromo(checked)}
          searchHandler={(value: string) => setSearchValue(value)}
        />
      </Header>
      <StyledBody>
        {products.items.length === 0 && !loading ? <NoProducts /> : null}
        <ProductList products={products.items} />
        <Pagination
          totalPages={products.meta.totalPages}
          totalItems={products.meta.totalItems}
          itemsPerPage={8}
          selectedPageHandler={(page: number) => setSelectedPage(page)}
        />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media ${device.laptop} {
    padding: 56px 108px;
  }
`;
