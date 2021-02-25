import { IconEnum } from "./../icon/Icon.enum";

export enum InputTypes {
  text = "text",
  number = "number",
  password = "password",
}

export type InputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type: InputTypes;
  className?: string;
  icon?: IconEnum;
  onChangeHandler: (value: string) => void;
};
