import { useState } from 'react';
import { getRandomFreeCellIndexes } from './ai/getRandomFreeCellIndexes';

const initialArray = [
  [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
  [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
  [{ element: '', color: null }, { element: '', color: null }, { element: '', color: null }],
];

export function useApp() {
  const [gameBoard, setGameBoard] = useState(initialArray);

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
    const freeCellIndexes = getRandomFreeCellIndexes(gameBoard);
    if (freeCellIndexes.length !== 0) {
      const [rowIndex, cellIndex] = freeCellIndexes;
      setCellValue(rowIndex, cellIndex, 'x');
    }
  };

  return {
    gameBoard,
    setCellValue,
    setAiValue,
  };
}
