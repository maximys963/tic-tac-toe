export function checkVictory(board) {
  // check every row

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if(compareThree(row[0].element, row[1].element, row[2].element)){
      return {
        element: row[0].element,
        combination: [
            {
              row: i,
              cell: 0
            },
          {
            row: i,
            cell: 1
          },
          {
            row: i,
            cell: 2
          }
        ]
      }
    }
  }

  // check every column

  for (let i = 0; i < board.length; i++) {
    if(compareThree(board[0][i].element, board[1][i].element, board[2][i].element)){
       return {
        element: board[0][i].element,
        combination: [
          {
            row: 0,
            cell: i
          },
          {
            row: 1,
            cell: i
          },
          {
            row: 2,
            cell: i
          }
        ]
      }
    }
  }

  // check left diagonal

  if(compareThree(board[0][0].element, board[1][1].element, board[2][2].element)){
    return {
      element: board[0][0].element,
      combination: [
        {
          row: 0,
          cell: 0
        },
        {
          row: 1,
          cell: 1
        },
        {
          row: 2,
          cell: 2
        }
      ]
    }
  }

  // check right diagonal

  if(compareThree(board[0][2].element, board[1][1].element, board[2][0].element)){
    return {
      element: board[0][2].element,
      combination: [
        {
          row: 0,
          cell: 2
        },
        {
          row: 1,
          cell: 1
        },
        {
          row: 2,
          cell: 0
        }
      ]
    }
  }

  //check tie

  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      if(board[i][j].element === ''){
        return null
      }
    }
  }

  return {
    element: 'tie',
    combination: null
  }
}



function compareThree(firstCell, secondCell, thirdCell) {
  if(firstCell === ''){
    return false
  }
  return firstCell === secondCell && secondCell === thirdCell;
}
