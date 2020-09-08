import React from 'react';

export default function Home() {
    let count = 0;
    const addOne = () => {
        console.log(addOne);
    }
    const minusOne = () => {
        console.log(minusOne)
    }
    const resetButton = () => {
        console.log(resetButton)
    }
    const resetB = 'resetButton'
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={minusOne}>-1: {}</button>
            <button onClick={resetButton} id={resetB}>Reset:</button>
            <button onClick={addOne}>+1</button>
        </div>
    );
}