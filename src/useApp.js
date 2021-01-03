import { useState } from 'react';
import { checkFreeCells } from "./ai/checkFreeCells";
import { checkVictory } from "./helpers/checkVictory";
import { bestMove} from "./ai/bestMove";

const initialArray = [
  [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
  [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
  [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
];

export function useApp() {
  const [gameBoard, setGameBoard] = useState(initialArray);
  const [playerSigns] = useState({ai: 'o', player: 'x'})
  const [isGameFinished, setIsGameFinished] = useState(false);

  console.log('gameBoard', gameBoard)

  const setCellValue = (rowIndex, cellIndex, value) => {
    const draftCell = gameBoard[rowIndex][cellIndex];
    if (draftCell.element === '') {
      draftCell.element = value;

      const draftState = [...gameBoard];
      draftState[rowIndex][cellIndex] = {
        element: value,
        color: null,
      };

      setGameBoard(draftState);
    }
  };

  const handleCellClick = (rowIndex, cellIndex, value) => {
    if(gameBoard[rowIndex][cellIndex].element === ''){
      setCellValue(rowIndex, cellIndex, value);
      const isFreeCellsExists = checkFreeCells(gameBoard);
      if(isFreeCellsExists) {
        bestMove(gameBoard, playerSigns.ai, playerSigns.player, setGameBoard);
      }
      const winner = checkVictory(gameBoard);
      if(winner){
        setIsGameFinished(true)
        if(winner.element !== 'tie'){
          colorCombination(winner.combination);
        }
      }
    }
  };

  const colorCombination = (indexes) => {
    const updatedBoard = [...gameBoard];
    indexes.forEach((index) => {
      updatedBoard[index.row][index.cell].color = '#3498db';
    })

    setGameBoard(updatedBoard);
  }

  const resetGame = () => {
    setIsGameFinished(false);
    setGameBoard( [
        [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
        [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
        [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }]
  ])
  }

  return {
    gameBoard,
    handleCellClick,
    playerSigns,
    isGameFinished,
    resetGame
  };
}
