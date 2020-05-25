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
        <Link to="/page-1/2020-05-25T16:59:47">Nested page</Link>
      </Container>
    </Page>
  </IndexLayout>
);

export default PageOne;
