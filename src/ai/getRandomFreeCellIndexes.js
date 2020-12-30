export function getRandomFreeCellIndexes(gameMatrix) {
  const freeCellsIndexesArray = getFreeCellsIndexesArray(gameMatrix);
  if (freeCellsIndexesArray.length !== 0) {
    const randomIndex = getRandomInt(0, freeCellsIndexesArray.length - 1);
    return freeCellsIndexesArray[randomIndex];
  }
  return [];
}

function getFreeCellsIndexesArray(gameMatrix) {
  return gameMatrix.reduce((acc, row, rowIndex) => {
    const filteredRow = [];
    row.forEach((cell, cellIndex) => {
      if (cell.element === '') {
        filteredRow.push([rowIndex, cellIndex]);
      }
    });

    return [...acc, ...filteredRow];
  }, []);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
