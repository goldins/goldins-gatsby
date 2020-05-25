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
        <h1>Bad Keyboard</h1>
        <Link to="/ux/">Back</Link>

        <p>Drag and drop the letters into the input field</p>
        <Form />
        <Keyboard />
      </Container>
    </Page>
  </IndexLayout>
);

export default SubPageOne;
