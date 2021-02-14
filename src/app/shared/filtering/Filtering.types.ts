export type FilteringProps = {
  isPromo: boolean;
  isPromoHandler: (checked: boolean) => void;
  isActive: boolean;
  isActiveHandler: (checked: boolean) => void;
  searchHandler: (value: string) => void;
};
