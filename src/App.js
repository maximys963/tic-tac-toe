import React from "react";
import './App.css';
import { TicTacToe } from "./components/TicTacToe/TicTacToe";
import { useApp } from "./useApp";

function App() {
    const {
      gameArray,
      setCellValue,
      setAiValue
    } = useApp()

  return (
    <div className="App">
      <div className="game_title">Tic Tac Toe</div>
        <TicTacToe
            gameArray = {gameArray}
            setCellValue = {setCellValue}
            setAiValue = {setAiValue}
        />
    </div>
  );
}

export default App;
