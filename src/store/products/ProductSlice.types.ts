import { ProductsResponseDto, ProductDto } from "../../types";

export interface ProductsState {
  products: ProductsResponseDto<ProductDto>;
  loading: boolean;
  errors: [];
}
