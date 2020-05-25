import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import IndexLayout from '../../../layouts';

import { Keyboard } from './Keyboard';
import { Form } from './Form';

const SubPageOne = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>001</h1>
        <Link to="/ux/">Back</Link>
        <Form />
        <Keyboard />
      </Container>
    </Page>
  </IndexLayout>
);

export default SubPageOne;
