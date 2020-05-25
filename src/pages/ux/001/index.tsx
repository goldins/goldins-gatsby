import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import IndexLayout from '../../../layouts';

const SubPageOne = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>001</h1>
        <Link to="/ux/">Back</Link>
      </Container>
    </Page>
  </IndexLayout>
);

export default SubPageOne;
