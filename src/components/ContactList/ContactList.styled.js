import styled from 'styled-components';

export const StyledContactsBlock = styled.div`
  width: 400px;
  margin-left: 60px;
`;

export const StyledContactList = styled.ul``;

export const StyledContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  list-style: circle;
`;

export const StyledContactNumber = styled.span`
  margin-left: 10px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: red;
  }

  &:focus {
    outline: none;
  }
`;
