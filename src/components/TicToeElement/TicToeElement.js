import React from 'react';
import PropTypes from 'prop-types';
import styles from './TicToe.module.css';
import { Cross } from '../Cross/Cross';
import { Circle } from '../Circle/Circle';

export const TicToeElement = (props) => {
  const {
    sign,
    color,
    rowIndex,
    cellIndex,
    handleCellClick,
    playerSigns,
    isGameFinished
  } = props;


  const getTicTacToeSign = (sign) => {
    const ticToeSigns = {
      x: <Cross color={color} />,
      o: <Circle color={color} />,
    };

    return ticToeSigns[sign] || null;
  };

  return (
    <div className={styles.tic_element_container} onClick={
      !isGameFinished
          ? () => handleCellClick(rowIndex, cellIndex, playerSigns.player)
          : null
      }>
      {getTicTacToeSign(sign)}
    </div>
  );
};

TicToeElement.propTypes = {
  sign: PropTypes.string,
};

export default TicToeElement;
