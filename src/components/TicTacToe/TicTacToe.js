import React from 'react';
import { TicToeElement } from "../TicToeElement/TicToeElement";
import PropTypes from 'prop-types';
import styles from './TicTacToe.module.css';

TicTacToe.propTypes = {
    gameArray: PropTypes.array,
};

export function TicTacToe(props) {
    const {
        gameArray,
        setCellValue,
        setAiValue
    } = props;

    return (
        <div className={styles.tic_container}>
            {gameArray.map(((row, rowIndex) => (
                <div
                    className={styles.tic_row}
                    key={rowIndex}
                >
                    {row.map((cell, cellIndex) => (
                    <TicToeElement
                        setCellValue = {setCellValue}
                        setAiValue = {setAiValue}
                        rowIndex={rowIndex}
                        cellIndex={cellIndex}
                        sign={cell.element}
                        color={cell.color}
                        key={`${rowIndex}_${cellIndex}`}
                    />
                ))}
                </div>
            )))}
        </div>
    );
}

export default TicTacToe;
