import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Score>
      <h1>{score}</h1>
      <p>Score</p>
    </Score>
  );
};

export default TotalScore;
const Score = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  gap: 0;
  h1 {
    font-size: 72px;
    margin: 0;
    line-height: 100%;
    font-weight: 600;
  }
  p {
    line-height: 100%;
    font-size: 16px;
    margin: 0;
  }
`;
