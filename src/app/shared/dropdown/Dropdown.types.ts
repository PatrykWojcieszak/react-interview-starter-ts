import { ReactNode, RefObject } from "react";

export type DropdownProps = {
  children: ReactNode;
  className?: string;
  reference?: RefObject<HTMLDivElement>;
};
