import React, { ReactNode, createContext } from 'react';
import { ThemeProvider as Theme, StyleSheetManager } from 'styled-components';

import { theme } from './theme';
import { GlobalStyle } from './style';

interface ThemeProviderProps {
  children: ReactNode;
  sheet: any;
}

export const ThemeProviderContext = createContext({});

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, sheet } = props;

  return (
    <ThemeProviderContext.Provider value={{ theme: 'dark' }}>
      <StyleSheetManager sheet={sheet}>
        <GlobalStyle />
        <Theme theme={theme}>{children}</Theme>
      </StyleSheetManager>
    </ThemeProviderContext.Provider>
  );
}
