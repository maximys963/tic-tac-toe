import { useState } from 'react';

const initialArray = [
    ['', '', '' ],
    ['', '', ''],
    ['', '', '']
]

export function useApp() {
    const [gameArray, setGameArray ] = useState(initialArray)

    return{
        gameArray,
        setGameArray
    }
}
