import React from 'react';

import { DividerProps } from './types';

import { DividerPrimitive } from './style';

export function Divider(props: DividerProps): JSX.Element {
  const { x = 0, y = 0 } = props;

  return <DividerPrimitive $y={y} $x={x} />;
}
