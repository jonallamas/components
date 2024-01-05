import React from 'react';

import { LinkButtonProps } from './types';

import { theme } from '../theme';
import { LinkButtonPrimitive } from './style';

export function LinkButton(props: LinkButtonProps) {
  const {
    children,
    color = 'primary',
    variant = 'filled',
    size = 'normal',
    // disabled = false,
    tabIndex = 0,
    href,
  } = props;

  let backgroundColor: string = 'transparent';
  let textColor: string = theme.colors.text;

  switch (variant) {
    case 'filled':
      backgroundColor = theme.colors[color];
      textColor = theme.colors.black;
      break;
    case 'bezeled':
      backgroundColor = theme.colors[`${color}15`];
      textColor = theme.colors[color];
      break;
    case 'bezeledGray':
      backgroundColor = theme.colors.gray15;
      textColor = theme.colors[color];
      break;
    case 'borderless':
      backgroundColor = 'transparent';
      textColor = theme.colors[color];
      break;
  }

  return (
    <LinkButtonPrimitive
      href={href}
      tabIndex={tabIndex}
      // disabled={disabled}
      $isSmall={size === 'small'}
      $background={backgroundColor}
      $color={textColor}
    >
      {children}
    </LinkButtonPrimitive>
  );
}
