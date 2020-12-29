import React from 'react';

export function Circle(props) {

    const { color } = props;

    return(
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="60" fill="transparent"/>
            <circle cx="60" cy="60" r="57" stroke={color || "#AB72D9"} stroke-opacity="0.83" stroke-width="6"/>
        </svg>
    )
}
