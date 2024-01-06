import { styled } from 'styled-components';

import { theme } from '../../theme';

export const ButtonSettingPrimitive = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;

  padding: 0 12px;

  background-color: ${theme.colors.gray15};
  border-radius: 8px;

  color: ${theme.colors.text};
  font-size: 0.8rem;
  text-decoration: none;
`;
