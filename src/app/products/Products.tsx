import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";

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
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce<string>(searchValue, 500);
  const { products, loading } = useSelector((root: RootState) => root.products);
  const dispatch = useDispatch();

  const history = useHistory();
  const locationSearch = useLocation().search;

  const searchParams = new URLSearchParams(locationSearch);
  if (!searchParams.has(ParamsEnum.limit))
    searchParams.append(ParamsEnum.limit, "8");

  const isPromo = Boolean(
    new URLSearchParams(locationSearch).get(ParamsEnum.promo)
  );
  const isActive = Boolean(
    new URLSearchParams(locationSearch).get(ParamsEnum.active)
  );
  const selectedPage = new URLSearchParams(locationSearch).get(ParamsEnum.page);

  const fetch = () => {
    history.push({
      pathname: "/",
      search: "?" + searchParams.toString(),
    });

    dispatch(fetchProducts("?" + searchParams.toString()));
  };

  const setSearchParam = (key: string, val: string | boolean | number) => {
    console.log("val", val);
    if (!val) {
      console.log("true");
      searchParams.delete(key);
    } else {
      if (searchParams.has(key)) searchParams.set(key, val.toString());
      else searchParams.append(key, val.toString());
    }

    if (key !== ParamsEnum.page) {
      console.log(searchParams.toString());
      searchParams.set(ParamsEnum.page, "1");
    }
    fetch();
  };

  useEffect(() => {
    setSearchParam(ParamsEnum.search, debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <StyledProducts>
      <Header>
        <Filtering
          isActive={isActive}
          isPromo={isPromo}
          isActiveHandler={(checked: boolean) =>
            setSearchParam(ParamsEnum.active, checked)
          }
          isPromoHandler={(checked: boolean) =>
            setSearchParam(ParamsEnum.promo, checked)
          }
          searchHandler={(value: string) => setSearchValue(value)}
        />
      </Header>
      <StyledBody>
        <ProductList products={products.items} loading={loading} />
        {products.items.length > 0 && !loading ? (
          <Pagination
            selectedPage={selectedPage ? +selectedPage : 1}
            totalPages={products.meta.totalPages}
            selectedPageHandler={(page: number) =>
              setSearchParam(ParamsEnum.page, page)
            }
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
