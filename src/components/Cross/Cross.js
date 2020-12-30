import React from 'react';

export function Cross(props) {
  const { color } = props;

  return (
    <svg width="124" height="120" viewBox="0 0 124 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="5.76777"
        y1="2.23223"
        x2="121.768"
        y2="118.232"
        stroke={color || '#EB6666'}
        strokeWidth="5"
      />
      <line
        y1="-2.5"
        x2="164.049"
        y2="-2.5"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 120 4)"
        stroke={color || '#EB6666'}
        strokeWidth="5"
      />
    </svg>
  );
}
