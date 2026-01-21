import React from "react";
import styled from "styled-components";

const GameButtons = ({ text, onClick, isOutlined, className }) => {
  return (
    <GameButton className={className} isOutlined={isOutlined} onClick={onClick}>
      {text}
    </GameButton>
  );
};

export default GameButtons;
const GameButton = styled.button`
  padding: 1rem 2rem;
  font-size: 16px;
  border-radius: 4px;
  background-color: ${(props) => (props.isOutlined ? "transparent" : "#111")};
  color: ${(props) => (props.isOutlined ? "#111" : "white")};
  border: ${(props) => (props.isOutlined ? "2px solid #111" : "none")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isOutlined ? "#111" : "#333")};
    color: white;
    transition: background-color 0.3s ease;
  }
`;
