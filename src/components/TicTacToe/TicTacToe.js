import React from 'react';
import PropTypes from 'prop-types';
import { TicToeElement } from '../TicToeElement/TicToeElement';
import styles from './TicTacToe.module.css';

TicTacToe.propTypes = {
  gameArray: PropTypes.array,
};

export function TicTacToe(props) {
  const {
    gameBoard,
    handleCellClick,
    playerSigns,
    isGameFinished
  } = props;

  return (
    <div className={styles.tic_container}>
      {gameBoard.map(((row, rowIndex) => (
        <div
          className={styles.tic_row}
          key={rowIndex}
        >
          {row.map((cell, cellIndex) => (
            <TicToeElement
              handleCellClick={handleCellClick}
              isGameFinished={isGameFinished}
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              sign={cell.element}
              playerSigns={playerSigns}
              color={cell.color}
              key={`${rowIndex}_${cellIndex}`}
            />
          ))}
        </div>
      )))}
    </div>
  );
}
