export enum InputTypes {
  text = "text",
  number = "number",
  password = "password",
}

export type InputProps = {
  showIcon?: boolean;
  name: string;
  label?: string;
  placeholder?: string;
  type: InputTypes;
};
