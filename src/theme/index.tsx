import { useMemo, ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import useSettings from '../hooks/useSettings';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import componentsOverride from './overrides/index';
import shape from './shape';
import typography from './typography';

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const { themeMode } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      shape: shape,
      palette: isLight
        ? { ...palette.light, mode: 'light' }
        : { ...palette.dark, mode: 'dark' },
      shadows: shadows.light,
      customShadows: customShadows.light,
      typography: typography,
    }),
    [isLight]
  );

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
