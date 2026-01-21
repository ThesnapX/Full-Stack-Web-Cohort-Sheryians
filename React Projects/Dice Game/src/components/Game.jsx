import React, { useState } from "react";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";

const Game = ({ toggle }) => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const genrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = genrateRandomNumber(1, 7);
    if (!selectedNumber) {
      setError("You have to select a number first");
      return;
    }
    setError("");

    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => Math.max(0, prev - 2));
    }
  };

  const resetButton = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
    setError("");
  };

  return (
    <GameMainContainer>
      <div className="game-top">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setError={setError}
        />
      </div>
      <div className="main-game">
        <RoleDice
          resetScore={resetButton}
          toggle={toggle}
          currentDice={currentDice}
          roleDice={roleDice}
        />
      </div>
    </GameMainContainer>
  );
};

export default Game;

const GameMainContainer = styled.main`
  width: 100%;
  height: 17.2vh;
  padding: 1rem;
  .game-top {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  .main-game {
    width: 100%;
    height: 82.8vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
