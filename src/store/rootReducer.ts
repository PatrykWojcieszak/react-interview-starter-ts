import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "./product/ProductSlice";

const rootReducer = combineReducers({
  products: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
