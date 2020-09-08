import React from 'react'; 

export default function Home () {
    let count = 0;
    const addOne = () => {
        count++;
        resetCounterApp();
    }

    const resetCounterApp = () => {
        return <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
        </div>
    }
    resetCounterApp();
    return (
        <div>
            <h1>{resetCounterApp(1)}</h1>
            <h1>{addOne}</h1>
            <h1>Count: {count}</h1>
        </div>
    );
}