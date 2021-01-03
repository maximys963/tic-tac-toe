import { minimax } from "./minmax";

export function bestMove(board, ai, player, setGameBoard){
    let bestScore = -Infinity;
    const updatedBoard = [...board];
    let move;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(updatedBoard[i][j].element === ''){
                updatedBoard[i][j].element = ai;
                let score = minimax(updatedBoard, 0, false, ai, player);
                updatedBoard[i][j].element = '';
                if(score > bestScore){
                    bestScore = score;
                    move = { i, j}
                }
            }
        }
    }

    console.log({move});

    updatedBoard[move.i][move.j].element = ai;
    setGameBoard(updatedBoard);
}
