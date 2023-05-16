import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  font-size: 18px;
`;

export const StyledItem = styled.li`
  padding: 42px 0;
`;

export const StyledLink = styled(NavLink)`
  font-family: var(--fontFamily);

  text-decoration: none;
  color: var(--primaryTextColor);
  opacity: 0.7;

  transition: opacity var(--transition);

  &.active {
    opacity: 1;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    opacity: 1;
  }
`;
