import React from 'react';
import styled from '@emotion/styled';

import { BigKey, Keys, Key } from './Keys';

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
export const NUMERIC = '01234567890';
export const SPECIAL = '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';

export const CAPS = 'CAPS LOCK';

const StyledKeyboard = styled.div(() => ({
  display: 'flex',
  userSelect: 'none'
}));

type Modifiers = {
  caps: boolean;
};

export const Keyboard = () => {
  const [modifiers, setModifiers] = React.useState<Modifiers>({ caps: false });

  const shiftToggle = () => {
    setModifiers((current) => ({ ...modifiers, caps: !current.caps }));
  };

  return (
    <StyledKeyboard>
      <Keys>
        {ALPHA.split('').map((v, i) => (
          <Key key={i.toString()}>{modifiers.caps ? v.toUpperCase() : v}</Key>
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
      <BigKey onClick={shiftToggle} className={modifiers.caps ? 'active' : ''}>
        {CAPS}
      </BigKey>
    </StyledKeyboard>
  );
};
