import { useState } from 'react';
import { getRandomFreeCellIndexes } from './ai/getRandomFreeCellIndexes';

const initialArray = [
    [{ element: '', color: null}, {element: '', color: null}, {element: '', color: null}],
    [{ element: '', color: null}, {element: '', color: null}, {element: '', color: null}],
    [{ element: '', color: null}, {element: '', color: null}, {element: '', color: null}],
]

export function useApp() {
    const [gameArray, setGameArrayValue ] = useState(initialArray)

    const setCellValue = (rowIndex, cellIndex, value) => {
        const draftCell = gameArray[rowIndex][cellIndex];
        if(draftCell.element === ''){
            draftCell.element = value;

            const draftState = [...gameArray];
            draftState[rowIndex][cellIndex] = {
                element: value,
                color: null
            };

            setGameArrayValue(draftState);
        }
    }

    const setAiValue = () => {
        const freeCellIndexes = getRandomFreeCellIndexes(gameArray);
        if(freeCellIndexes.length !== 0){
            console.log('freeCellIndexes', freeCellIndexes)
            const [rowIndex, cellIndex] = freeCellIndexes;
            setCellValue(rowIndex, cellIndex, 'x')
        }
    }



    return{
        gameArray,
        setCellValue,
        setAiValue
    }
}
