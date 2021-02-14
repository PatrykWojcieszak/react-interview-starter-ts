import { RefObject } from "react";

export type ProductTypes = {
  img?: string;
  name?: string;
  description?: string;
  close: () => void;
  reference?: RefObject<HTMLDivElement>;
};
