import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { Link } from 'gatsby';

import { Theme } from '../styles/defaultTheme';
import Container from './Container';

const StyledHeader = styled.header(({ theme }: { theme: Theme }) => ({
  height: theme.heights.header,
  padding: `0 ${theme.dimensions.containerPadding}rem`,
  background: `linear-gradient(270deg, ${theme.colors.accent} 1.53%, ${theme.colors.brand} 101.53%)`,
  color: transparentize(0.5, theme.colors.black)
}));

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const HomepageLink = styled(Link)(({ theme }: { theme: Theme }) => ({
  color: theme.colors.white,
  fontSize: '1.5rem',
  fontWeight: 600,
  '&:hover, &:focus': {
    textDecoration: 'none'
  }
}));

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
