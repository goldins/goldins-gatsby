import * as React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';

import normalize from '../styles/normalize';
import { Theme } from '../styles/defaultTheme';

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

type LayoutRootProps = React.PropsWithChildren<{
  className?: string;
}>;

const LayoutRoot = ({ children, className }: LayoutRootProps) => {
  const theme = useTheme<Theme>();
  return (
    <>
      <Global styles={() => css(normalize(theme))} />
      <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
    </>
  );
};

export default LayoutRoot;
