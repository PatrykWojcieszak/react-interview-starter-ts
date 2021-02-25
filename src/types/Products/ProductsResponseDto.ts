import { PaginateLinksDto, PaginateMetaDto } from "..";

export interface ProductsResponseDto<T> {
  items: T[];
  meta: PaginateMetaDto;
  links: PaginateLinksDto;
}
