import { AppThunk } from "store/configureStore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getData, PRODUCTS } from "api/api";

//TYPES
import { ProductDto, ProductResponseDto } from "../../types";
import { ProductState } from "./ProductSlice.types";

const initialState: ProductState = {
  products: {
    items: [],
    meta: {
      totalItems: 0,
      itemCounts: 0,
      itemsPerPage: 0,
      totalPages: 0,
      currentPage: 0,
    },
    links: {
      first: "",
      previous: "",
      next: "",
      last: "",
    },
  },
  loading: true,
  errors: [],
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsStart(state) {
      state.loading = true;
    },
    getProductsSuccess(
      state,
      action: PayloadAction<ProductResponseDto<ProductDto>>
    ) {
      state.products = action.payload;
      state.loading = false;
    },
    getProductsFail(state, err) {
      state.errors = err.payload;
      state.loading = false;
    },
  },
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFail,
} = products.actions;

export default products.reducer;

export const fetchProducts = (params: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getProductsStart());

    const products = await getData<ProductResponseDto<ProductDto>>(
      PRODUCTS,
      params
    );
    dispatch(getProductsSuccess(products));
  } catch (err) {
    dispatch(getProductsFail(err));
  }
};
