export type PaginationProps = {
  selectedPageHandler: (page: number) => void;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
};
