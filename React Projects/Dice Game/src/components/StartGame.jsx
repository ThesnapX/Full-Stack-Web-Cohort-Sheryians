import styled from "styled-components";
import GameButtons from "./GameButtons";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="./images/dices-hero.png" alt="" />
      <div className="content">
        <h1>Dice Game</h1>
        <GameButtons isOutlined={false} onClick={toggle} text="Play Game" />
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 3rem;
  img {
    width: 40%;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;

    h1 {
      font-size: 96px;
      line-height: none;
      text-transform: uppercase;
    }
  }
`;
