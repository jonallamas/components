import React from 'react';

import { IconProps } from './types';

import { IconPrimitive } from './style';

export function Icon(props: IconProps) {
  const { children, size = 'normal', color = 'currentColor' } = props;

  const isSmall = size === 'small';

  return (
    <IconPrimitive $isSmall={isSmall} $color={color}>
      {children}
    </IconPrimitive>
  );
}
