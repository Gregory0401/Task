import React from 'react';
import { List, StyledLink, StyledItem } from './Navigation.styled';

function Navigation() {
  return (
    <nav>
      <List>
        <StyledItem>
          <StyledLink to="/" end>
            Home
          </StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="/tweets" end>
            Users
          </StyledLink>
        </StyledItem>
      </List>
    </nav>
  );
}

export default Navigation;
