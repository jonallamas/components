import React from 'react';

import { Icon } from '../Icon';
import { CaretRightIcon } from '../Icons';

import { LinkSettingProps } from './types';

import { theme } from '../../theme';
import { LinkSettingPrimitive } from './style';

export function LinkSetting(props: LinkSettingProps) {
  const { children, href, target = '_self' } = props;

  return (
    <LinkSettingPrimitive>
      <a href={href} target={target}>
        {children}
        <Icon size='small' color={theme.colors.gray40}>
          <CaretRightIcon />
        </Icon>
      </a>
    </LinkSettingPrimitive>
  );
}
