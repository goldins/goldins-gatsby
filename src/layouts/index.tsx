import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';

import 'modern-normalize';
import '../styles/normalize';

import Header from '../components/Header';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';
import { defaultTheme } from '../styles/defaultTheme';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const IndexLayout = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={defaultTheme}>
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data: StaticQueryProps) => (
        <LayoutRoot>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords }
            ]}
          />
          <Header title={data.site.siteMetadata.title} />
          <LayoutMain>{children}</LayoutMain>
        </LayoutRoot>
      )}
    />
  </ThemeProvider>
);

export default IndexLayout;
