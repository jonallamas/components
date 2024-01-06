import React, { ReactNode, createContext } from 'react';
import { ThemeProvider, StyleSheetManager } from 'styled-components';

import { theme } from './theme';
import { GlobalStyle } from './style';

interface ProviderProps {
  children: ReactNode;
  sheet: any;
}

// export const ProviderContext = createContext({});

export function Provider(props: ProviderProps) {
  const { children, sheet } = props;

  return (
    <>
      <StyleSheetManager sheet={sheet}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyleSheetManager>
    </>
  );
}
