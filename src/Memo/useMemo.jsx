import React, {useMemo, useState} from "react";

const ExpensiveComponent = () => {
    const sum = () => {
        console.log('calculating....');
        let i = 0;
        for (i = 0; i <= 1000000; i++) {
            i = i + 1;
        }
        return i;
    }
    const total = useMemo(() => {
        return sum();
    }, [])
    // const total = sum();
    return (
        <div>sum: {total}</div>
    )
}

function ReactUseMemo() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <span>{counter}</span>
            <button className="generic-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="generic-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>

            <ExpensiveComponent/>
        </div>
    )
}

export default ReactUseMemo; // optimized values inside function
