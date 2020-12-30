import React from 'react';
import PropTypes from 'prop-types';
import styles from './TicToe.module.css';
import { useTicToeElement } from './useTicToeElement';
import { Cross } from '../Cross/Cross';
import { Circle } from '../Circle/Circle';

export const TicToeElement = (props) => {
  const {
    sign,
    color,
    rowIndex,
    cellIndex,
    setCellValue,
    setAiValue,
  } = props;

  const {
    handleCellClick,
  } = useTicToeElement(
    setCellValue,
    setAiValue,
  );

  const getTicTacToeSign = (sign) => {
    const ticToeSigns = {
      x: <Cross color={color} />,
      o: <Circle color={color} />,
    };

    return ticToeSigns[sign] || null;
  };

  return (
    <div className={styles.tic_element_container} onClick={() => handleCellClick(rowIndex, cellIndex, 'o')}>
      {getTicTacToeSign(sign)}
    </div>
  );
};

TicToeElement.propTypes = {
  sign: PropTypes.string,
};

export default TicToeElement;
