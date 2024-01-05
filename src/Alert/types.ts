export interface AlertProps {
  title: string | undefined;
  description: string | undefined;
  type: 'success' | 'warning' | 'error' | undefined;
  isOpen: boolean;
  // params?: ReplacementParams;
}

export interface AlertPrimitiveProps {
  $background?: string;
  $color?: string;
  $isOpen: boolean;
}
