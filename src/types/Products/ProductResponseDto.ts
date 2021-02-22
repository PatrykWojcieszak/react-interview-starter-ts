import { PaginateLinksDto, PaginateMetaDto } from "..";
export interface ProductResponseDto<T> {
  items: T[];
  meta: PaginateMetaDto;
  links: PaginateLinksDto;
}
