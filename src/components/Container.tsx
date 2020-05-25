import * as React from 'react';
import styled from '@emotion/styled';

import { Theme } from '../styles/defaultTheme';

const StyledContainer = styled.div(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 'auto',
  maxWidth: `${theme.widths.lg / theme.dimensions.fontSize.regular}em`
}));

type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

const Container = ({ children, className }: ContainerProps) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
