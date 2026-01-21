import React, { useState } from "react";
import StartGame from "./components/StartGame";
import "./App.css";
import Game from "./components/Game";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };
  return (
    <>
      {gameStarted ? (
        <Game toggle={toggleGamePlay} />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
    </>
  );
};

export default App;
