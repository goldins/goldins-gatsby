import * as React from 'react';
import styled from '@emotion/styled';

import { Theme } from '../styles/defaultTheme';

const StyledPage = styled.div(({ theme }: { theme: Theme }) => ({
  display: 'block',
  flex: 1,
  position: 'relative',
  padding: `${theme.dimensions.containerPadding}rem`,
  marginBottom: '3rem'
}));

type PageProps = React.PropsWithChildren<{
  className?: string;
}>;

const Page = ({ children, className }: PageProps) => <StyledPage className={className}>{children}</StyledPage>;

export default Page;
