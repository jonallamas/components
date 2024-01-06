import React from 'react';

import { FlexProps } from './types';

import { FlexPrimitive } from './style';

export function Flex(props: FlexProps): JSX.Element {
  const {
    children,
    gap = 0,
    direction = 'row',
    flex = 'initial',
    justify = 'start',
    align = 'start',
    onClick = () => null,
  } = props;

  return (
    <FlexPrimitive
      onClick={onClick}
      $gap={`${gap}px`}
      $direction={direction}
      $flex={flex}
      $justify={justify}
      $align={align}
    >
      {children}
    </FlexPrimitive>
  );
}
