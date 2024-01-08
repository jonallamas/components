import { ReactNode, MouseEventHandler, CSSProperties } from 'react';

type Color = 'primary' | 'secondary' | 'error';
type Variant = 'filled' | 'bezeled' | 'bezeledGray' | 'borderless';
type Size = 'small' | 'normal';

export interface ButtonProps {
  children: ReactNode;
  color?: Color;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  componentName?: string;
  tabIndex?: number;
  onClick(event: React.MouseEvent<HTMLElement>): void;
  style?: CSSProperties;
}

export interface BaseButtonProps {
  $background?: string;
  $color?: string;
  $isSmall?: boolean;
}
