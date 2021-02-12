import { QueryResultDto, ProductDto } from "./../../types";

export interface ProductState {
  product: QueryResultDto<ProductDto>;
  loading: boolean;
}
