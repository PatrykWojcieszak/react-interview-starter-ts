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
import { fetchProduct } from "store/products/ProductsSlice";

//STYLES
import { flexColumnCenter } from "styles/mixins";

const Products = () => {
  const [isPromo, setIsPromo] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const { products, loading } = useSelector((root: RootState) => root.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const isPromoQuery = isPromo ? `&promo=${isPromo}` : "";
    const isActiveQuery = isActive ? `&active=${isActive}` : "";
    const params = `?search=${searchValue}&limit=8&page=${selectedPage}${isPromoQuery}${isActiveQuery}`;

    //There's situation when you type 1 or 2 characters into search(for example "te")
    //and API returns objects with promo and active having true value
    //even when in query params, they're false. I would fix it by setting minimum characters length
    //and show an error but there's no design for error on Figma, so I left it.
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

export default Products;

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
