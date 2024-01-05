import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import { GlobalStyle } from './style';

interface ProviderProps {
  children: ReactNode;
}

export function Provider(props: ProviderProps) {
  const { children } = props;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
