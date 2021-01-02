import { useState } from 'react';
import { bestMove} from "./ai/bestMove";
import { getRandomFreeCellIndexes } from './ai/getRandomFreeCellIndexes';

const initialArray = [
  [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
  [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
  [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
];

export function useApp() {
  const [gameBoard, setGameBoard] = useState(initialArray);
  const [playerSigns, setPlayerSigns] = useState({ai: 'o', player: 'x'})

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

  const setAiValue = () => {
    bestMove(gameBoard, playerSigns.ai, playerSigns.player, setGameBoard);
  };

  return {
    gameBoard,
    setCellValue,
    setAiValue,
    playerSigns
  };
}
