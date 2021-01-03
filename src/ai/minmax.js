import { checkVictory } from '../helpers/checkVictory';

const scoresDesk = {
    o : 10,
    x: -10,
    tie: 0
}

export function minimax(board, depth, isMaximizing, ai, player){
    // check winner
    const winner = checkVictory(board);
    if(winner){
        return scoresDesk[winner.element];
    }

    if(isMaximizing) {
        let bestScore = -Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
               if(board[i][j].element === ''){
                   board[i][j].element = ai;
                   let score = minimax(board, depth + 1, false, ai, player);
                   board[i][j].element = '';
                   bestScore = Math.max(score, bestScore);
               }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j].element === ''){
                    board[i][j].element = player;
                    let score = minimax(board, depth + 1, true,  ai, player);
                    board[i][j].element = '';
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore
    }
}
