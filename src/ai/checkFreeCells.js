export function checkFreeCells(board){
    let isFreeCellExists = false

    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if(board[i][j].element === ''){
                isFreeCellExists = true;
            }
        }
    }

    return isFreeCellExists;
}
