export enum BtnStyleTypes {
  primary = "primary",
  secondary = "secondary",
}

export type ButtonProps = {
  name: string;
  clicked: () => void;
  text: string;
  disabled?: boolean;
  styleType: BtnStyleTypes;
  className?: string;
};
