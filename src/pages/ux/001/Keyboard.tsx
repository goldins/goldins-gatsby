import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';

import { Theme } from '../../../styles/defaultTheme';
// const ALPHA = 'qwertyuiopasdfghjklzxcvbnm';
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
export const NUMERIC = '01234567890';
export const SPECIAL = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';
export const SHIFT = 'SHIFT';

const KEY_SIZE_FACTOR = 2.75;

const StyledKey = styled.div(({ theme }: { theme: Theme }) => ({
  margin: 3,
  color: theme.colors.brand,
  width: theme.dimensions.fontSize.regular * KEY_SIZE_FACTOR,
  height: theme.dimensions.fontSize.regular * KEY_SIZE_FACTOR,
  borderWidth: '1px',
  borderColor: theme.colors.gray.calm,
  borderStyle: 'solid',
  fontSize: theme.dimensions.fontSize.regular,
  borderRadius: theme.dimensions.borderRadii.regular,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    cursor: 'pointer'
  },
  '&:active': {
    backgroundColor: transparentize(0.45, theme.colors.gray.calm)
  }
}));

const Key = ({ children }: any) => <StyledKey>{children}</StyledKey>;

const BigKey = styled(StyledKey)(({ theme }: { theme: Theme }) => ({
  width: theme.dimensions.fontSize.regular * 2.75 * 2
}));

const Keys = styled.div(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flex: '1 1',
  flexWrap: 'wrap',
  width: '100%',
  textAlign: 'center',
  alignContent: 'flex-start',
  justifyContent: 'center',
  maxWidth: theme.dimensions.fontSize.regular * KEY_SIZE_FACTOR * 8
}));

const StyledKeyboard = styled.div(() => ({
  display: 'flex',
  userSelect: 'none'
}));

export const Keyboard = () => {
  return (
    <StyledKeyboard>
      <Keys>
        {ALPHA.split('').map((v, i) => (
          <Key key={i.toString()}>{v}</Key>
        ))}
      </Keys>
      <Keys>
        {NUMERIC.split('').map((v, i) => (
          <Key key={i.toString()}>{v}</Key>
        ))}
      </Keys>
      <Keys>
        {SPECIAL.split('').map((v, i) => (
          <Key key={i.toString()}>{v}</Key>
        ))}
      </Keys>
      <BigKey>{SHIFT}</BigKey>
    </StyledKeyboard>
  );
};
