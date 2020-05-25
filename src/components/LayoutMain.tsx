import * as React from 'react';
import styled from '@emotion/styled';

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

type LayoutMainProps = React.PropsWithChildren<{
  className?: string;
}>;

const LayoutMain = ({ className, children }: LayoutMainProps) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
