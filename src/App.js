import React from 'react';
import './App.css';
import { TicTacToe } from './components/TicTacToe/TicTacToe';
import { useApp } from './useApp';

function App() {
  const {
    gameBoard,
    handleCellClick,
    playerSigns,
    setGameBoard,
    colorCombination,
    isGameFinished,
    resetGame
  } = useApp();

  return (
    <div className="App">
      <div className="game_title">Tic Tac Toe</div>
      <TicTacToe
        isGameFinished={isGameFinished}
        gameBoard={gameBoard}
        handleCellClick={handleCellClick}
        playerSigns={playerSigns}
        setGameBoard={setGameBoard}
        colorCombination={colorCombination}
      />
        {isGameFinished
            ? <div
                className="button"
                onClick={resetGame}
              >
                Play Again ?
               </div>
            : null
        }
    </div>
  );
}

export default App;
