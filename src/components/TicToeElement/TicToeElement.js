import React from 'react';
import PropTypes from 'prop-types';
import styles from './TicToe.module.css';

export const TicToeElement = props => {
    return (
        <div className={styles.tic_element_container} />
    );
};

TicToeElement.propTypes = {

};

export default TicToeElement;
