import { ProductDto } from "./../../../../types/";

export type CardProps = {
  product: ProductDto;
  showDetailsHandler: (id: number) => void;
};
