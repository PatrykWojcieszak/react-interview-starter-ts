import React, { useEffect, useState } from "react";
import styled from "styled-components";

//COMPONENTS
import { ProductList } from "./productList/ProductList";
import { Header } from "app/shared/header/Header";
import { Filtering } from "app/shared/filtering/Filtering";
import { Pagination } from "app/shared/pagination/Pagination";

//TYPeS
import { device } from "styles/breakpoints";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import { fetchProduct } from "store/product/ProductsSlice";

//STYLES
import { flexColumnCenter } from "styles/mixins";

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
  }, [dispatch, searchValue, isPromo, isActive, selectedPage]);

  return (
    <StyledProducts>
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
        <ProductList products={products.items} loading={loading} />
        {products.items.length > 0 && !loading ? (
          <Pagination
            selectedPage={selectedPage}
            totalPages={products.meta.totalPages}
            selectedPageHandler={(page: number) => setSelectedPage(page)}
          />
        ) : null}
      </StyledBody>
    </StyledProducts>
  );
};

const StyledProducts = styled.div`
  background-color: ${({ theme }) => theme.colors?.background};
  height: 100vh;
`;

const StyledBody = styled(flexColumnCenter)`
  padding: 24px;

  @media ${device.laptop} {
    padding: 56px 108px;
  }
`;
