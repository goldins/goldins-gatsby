import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../../components/Page';
import Container from '../../components/Container';
import IndexLayout from '../../layouts';

const PageOne = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Page 1</h1>
        <Link to="/ux/001">Project 001</Link>
      </Container>
    </Page>
  </IndexLayout>
);

export default PageOne;
