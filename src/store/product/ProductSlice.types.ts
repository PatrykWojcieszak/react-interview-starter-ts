import { QueryResultDto, ProductDto } from "./../../types";
export interface ProductState {
  products: QueryResultDto<ProductDto>;
  loading: boolean;
  errors: [];
}
