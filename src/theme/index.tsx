import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import componentsOverride from "./overrides/index";
import shape from "./shape";
import typography from "./typography";

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const themeOptions: ThemeOptions = {
    shape: shape,
    palette: { ...palette.light, mode: "light" },
    shadows: shadows.light,
    customShadows: customShadows.light,
    typography: typography,
  };

  const theme = createTheme(themeOptions);
  // @ts-ignore
  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
