import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import { Wrapper } from './AppBar.styled';

function AppBar() {
  return (
    <Wrapper>
      <Container>
        <Navigation />
      </Container>
    </Wrapper>
  );
}

export default AppBar;
