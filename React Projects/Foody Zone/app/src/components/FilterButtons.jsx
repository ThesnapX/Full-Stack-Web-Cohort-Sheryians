import styled from "styled-components";

const FilterButtons = ({ text, onClick, active }) => {
  return (
    <FilterContainer onClick={onClick} $active={active}>
      {text}
    </FilterContainer>
  );
};

export default FilterButtons;
const FilterContainer = styled.div`
  padding: 0.5rem 1rem;
  background-color: #ff2828;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #df2121;
  }
  &:active {
    transform: scale(0.95);
  }
`;
