import React from 'react';
import { TicToeElement } from "../TicToeElement/TicToeElement";
import PropTypes from 'prop-types';
import styles from './TicTacToe.module.css';

TicTacToe.propTypes = {
    gameArray: PropTypes.array,
};

export function TicTacToe(props) {
    const { gameArray } = props;
    return (
        <div className={styles.tic_container}>
            {gameArray.map(((row, index) => (
                <div
                    className={styles.tic_row}
                    key={index}
                >
                    {row.map((cell, cellIndex) => (
                    <TicToeElement
                        cell={cell}
                        key={`${index}_${cellIndex}`}
                    />
                ))}
                </div>
            )))}
        </div>
    );
}

export default TicTacToe;
