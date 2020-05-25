import * as React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import normalize from '../styles/normalize';

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

type LayoutRootProps = React.PropsWithChildren<{
  className?: string;
}>;

const LayoutRoot = ({ children, className }: LayoutRootProps) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
