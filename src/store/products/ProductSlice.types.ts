import { ProductResponseDto, ProductDto } from "../../types";
export interface ProductState {
  products: ProductResponseDto<ProductDto>;
  loading: boolean;
  errors: [];
}
