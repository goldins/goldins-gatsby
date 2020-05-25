import * as React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const PageTwo = () => {
  const [debug, setDebug] = React.useState('');

  const onClick = () => {
    setDebug('clicked');
  };

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Page 2</h1>
          <button type="button" onClick={onClick}>
            Click
          </button>
          <br />
          <br />
          <code>{debug}</code>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default PageTwo;
