import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  padding: 50px;
  border: 1px solid grey;
  margin-left: 40px;
`;

export const StyledField = styled(Field)`
  padding: 6px;
  width: 250px;
`;

export const SubmitFromBtn = styled.button`
  width: 150px;
  height: 30px;
  color: black;
  background-color: rgba(5, 5, 5, 0.18);
  border: 1px solid grey;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: green;
    background-color: transparent;
  }
`;
