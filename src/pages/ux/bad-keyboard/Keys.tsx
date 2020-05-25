import React, { DragEventHandler } from 'react';
import { transparentize } from 'polished';
import styled from '@emotion/styled';

import { Theme } from '../../../styles/defaultTheme';

const KEY_SIZE_FACTOR = 2.75;

const StyledKey = styled.div(({ theme }: { theme: Theme }) => ({
  margin: 3,
  color: theme.colors.brand,
  width: theme.dimensions.fontSize.regular * KEY_SIZE_FACTOR,
  height: theme.dimensions.fontSize.regular * KEY_SIZE_FACTOR,
  borderWidth: 1,
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
  '&:active, &.active': {
    backgroundColor: transparentize(0.45, theme.colors.gray.calm)
  }
}));

const onDragEnd: DragEventHandler<HTMLElement> = (e) => {
  e.currentTarget.style.borderStyle = 'solid';
};

export const Key = ({ children }: { children: string } = { children: '' }) => {
  const onDragStart: DragEventHandler<HTMLElement> = (e) => {
    e.currentTarget.style.borderStyle = 'dashed';
    e.dataTransfer.setData('text/plain', children);
  };

  return (
    <StyledKey draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      {children}
    </StyledKey>
  );
};

export const BigKey = styled(StyledKey)(({ theme }: { theme: Theme }) => ({
  width: theme.dimensions.fontSize.regular * 2.75 * 2.5
}));

export const Keys = styled.div(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flex: '1 1',
  flexWrap: 'wrap',
  width: '100%',
  textAlign: 'center',
  alignContent: 'flex-start',
  justifyContent: 'center',
  maxWidth: theme.dimensions.fontSize.regular * KEY_SIZE_FACTOR * 8
}));
