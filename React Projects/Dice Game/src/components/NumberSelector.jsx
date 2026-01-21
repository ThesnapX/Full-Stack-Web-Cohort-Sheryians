import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <SelectorContainer>
      <p className="error">{error}</p>
      <div className="number-boxes">
        {arrNumbers.map((value, i) => (
          <Box
            isSelected={selectedNumber === value}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select a number</p>
    </SelectorContainer>
  );
};

export default NumberSelector;
const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
  .number-boxes {
    display: flex;
    gap: 1rem;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid #111;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#111" : "transparent")};
  color: ${(props) => (props.isSelected ? "#f5f5f5" : "#111")};
`;
