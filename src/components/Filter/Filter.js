import { StyledFilterBlock } from './Filter.styled';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <StyledFilterBlock>
      <label>Find contacts by name</label>
      <input value={value} onChange={onFilterChange}></input>
    </StyledFilterBlock>
  );
};
