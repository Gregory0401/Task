import React from 'react';

import Container from 'components/Container/Container';
import { Wrapper, Title, Wrp, WrapperBG } from './HomePage.styled';

function HomePage() {
  return (
    <Container>
      <Wrapper>
        <Wrp>
          <Title>Press Users to start</Title>
        </Wrp>

        <WrapperBG />
      </Wrapper>
    </Container>
  );
}

export default HomePage;
