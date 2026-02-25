import {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
} from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

declare module "@mui/material/styles" {
  interface Theme extends MUITheme {
    custom: {
      border: string;
      cardBackground: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends MUIThemeOptions {
    custom: {
      border: string;
      cardBackground: string;
    };
  }

  export function createTheme(options?: ThemeOptions): Theme;
}
