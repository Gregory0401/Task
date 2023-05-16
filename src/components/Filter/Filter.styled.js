import styled from 'styled-components';

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px dashed #4b2a99;

  cursor: pointer;
  transition: opacity var(--transition);

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const FilterCurrent = styled.span`
  color: var(--mainColor);
`;

export const Popup = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  @media (max-width: 340px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const List = styled.ul`
  list-style: none;
  overflow: hidden;
`;

export const ListItem = styled.li`
  padding: 12px 20px;
  cursor: pointer;

  transition: background-color var(--transition);

  &:hover {
    background-color: rgba(75, 42, 153, 0.2);
  }

  &.active {
    background-color: rgba(75, 42, 153, 0.1);
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: var(--mainColor);
`;
