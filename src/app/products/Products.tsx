import React, { useEffect, useState } from "react";
import styled from "styled-components";

//COMPONENTS
import { ProductList } from "./productList/ProductList";
import { Header, Pagination } from "app/shared";
import { Filtering } from "app/products/productList/filtering/Filtering";

//TYPES
import { device } from "styles/breakpoints";
import { ParamsEnum } from "./Params.enum";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/rootReducer";
import { fetchProducts } from "store/products/ProductsSlice";

//STYLES
import { flexColumnCenter } from "styles/mixins";

//HOOKS
import { useDebounce } from "hooks";

const Products = () => {
  const [isPromo, setIsPromo] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce<string>(searchValue, 500);

  const { products, loading } = useSelector((root: RootState) => root.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const isPromoQuery = isPromo ? `&${ParamsEnum.promo}=${isPromo}` : "";
    const isActiveQuery = isActive ? `&${ParamsEnum.active}=${isActive}` : "";
    const params =
      `?${ParamsEnum.search}=${debouncedSearchValue}` +
      `&${ParamsEnum.limit}=8` +
      `&${ParamsEnum.page}=${selectedPage}` +
      isPromoQuery +
      isActiveQuery;

    dispatch(fetchProducts(params));
  }, [dispatch, debouncedSearchValue, isPromo, isActive, selectedPage]);

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
