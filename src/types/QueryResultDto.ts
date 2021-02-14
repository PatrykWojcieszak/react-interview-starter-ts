export interface QueryResultDto<T> {
  items: T[];
  meta: {
    totalItems: number;
    itemCounts: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}
