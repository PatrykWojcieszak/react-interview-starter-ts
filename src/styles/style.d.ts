import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
  }

  export interface Colors {
    foreground: string;
    background: string;
    fontMain: string;
    fontSecondary: string;
    blue: string;
    yellow: string;
    btnDisabled: string;
    accent: string;
  }

  export interface Fonts {
    family: string;
  }
}
