import styled from 'styled-components';

export const ButtonStyled = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 5%;
  padding: 14px 16px;
  border: none;
  border-radius: 50%;

  background-color: #5cd3a841;
  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: #5cd3a85a;
  }
`;
