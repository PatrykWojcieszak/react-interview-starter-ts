import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
  }
  export interface Colors {
    white: string;
    background: string;
    black: string;
    darkGrey: string;
    lightGrey: string;
    lightBlue: string;
    darkBlue: string;
    yellow: string;
    btnDisabled: string;
    accent: string;
  }
  export interface Fonts {
    family: string;
  }
}
