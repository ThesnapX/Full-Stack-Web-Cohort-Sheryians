import React, { useState } from "react";
import styled from "styled-components";
import GameButtons from "./GameButtons";

const RoleDice = ({ currentDice, roleDice, toggle, resetScore }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <div className="content">
        <p>Click on dice to role</p>
        <GameButtons
          className="dice-outlined"
          isOutlined={true}
          onClick={resetScore}
          text={"Reset Score"}
        />
        <GameButtons
          className="dice-home"
          onClick={toggle}
          isOutlined={false}
          text={"Home"}
        />
      </div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    .dice-home {
      width: 100%;
    }
    .dice-outlined {
      margin-top: 1rem;
    }
  }
`;
