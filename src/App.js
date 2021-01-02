import React from 'react';
import './App.css';
import { TicTacToe } from './components/TicTacToe/TicTacToe';
import { useApp } from './useApp';

function App() {
  const {
    gameBoard,
    setCellValue,
    setAiValue,
    playerSigns
  } = useApp();

  return (
    <div className="App">
      <div className="game_title">Tic Tac Toe</div>
      <TicTacToe
        gameBoard={gameBoard}
        setCellValue={setCellValue}
        setAiValue={setAiValue}
        playerSigns={playerSigns}
      />
    </div>
  );
}

export default App;
