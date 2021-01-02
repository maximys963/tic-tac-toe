export function checkVictory(board) {
  // check every row

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if(compareThree(row[0].element, row[1].element, row[2].element)){
      return row[0].element
    }
  }

  // check every column

  for (let i = 0; i < board.length; i++) {
    if(compareThree(board[0][i].element, board[1][i].element, board[2][i].element)){
      return board[0][i].element
    }
  }

  // check left diagonal

  if(compareThree(board[0][0].element, board[1][1].element, board[2][2].element)){
    return board[0][0].element
  }

  // check right diagonal

  if(compareThree(board[0][2].element, board[1][1].element, board[2][0].element)){
    return board[0][2].element
  }

  //check tie

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(board[i][j].element === ''){
        return null
      }
    }
  }

  return 'tie'
}



function compareThree(firstCell, secondCell, thirdCell) {
  if(firstCell === ''){
    return false
  }
  return firstCell === secondCell && secondCell === thirdCell;
}
