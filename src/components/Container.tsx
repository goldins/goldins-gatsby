import * as React from 'react';
import styled from '@emotion/styled';

import { widths } from '../styles/variables';
import { getEmSize } from '../styles/mixins';

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`;

type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

const Container = ({ children, className }: ContainerProps) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
