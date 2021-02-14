export type CheckboxProps = {
  checked: boolean;
  name: string;
  label?: string;
  checkedHandler: (checked: boolean) => void;
};
