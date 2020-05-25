import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Link to="/ux/">Project</Link>
        <br />
        <br />
        <Link to="/a-markdown-page/">.MD</Link>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
