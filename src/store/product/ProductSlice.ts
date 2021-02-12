import { ProductDto } from "./../../types/ProductDto";
import { QueryResultDto } from "./../../types/QueryResultDto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "store/configureStore";
import { ProductState } from "./ProductSlice.types";
import { getData, PRODUCT } from "api/api";

const initialState: ProductState = {
  product: {
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
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductStart(state) {
      state.loading = true;
    },
    getProductSuccess(
      state,
      action: PayloadAction<QueryResultDto<ProductDto>>
    ) {
      state.product = action.payload;
      state.loading = false;
    },
    getProductFail(state) {
      state.loading = false;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFail,
} = product.actions;

export default product.reducer;

export const fetchProduct = (params: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getProductStart());

    const products = await getData<ProductDto>(PRODUCT, params);
    dispatch(getProductSuccess(products));
  } catch (err) {
    dispatch(getProductFail());
  }
};
