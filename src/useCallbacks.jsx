import React, {memo, useCallback, useState} from "react";

const Button = memo(({onClick, children}) => {
    console.log('rendering children button', children);
    return <button className="generic-btn" onClick={onClick}>{children}</button>
})

function ReactUseCallbacks() {
    const [counter, setCounter] = useState(0);

    /*const increment = () => {
        setCounter(counter + 1)
    }*/

   /* const decrement = () => {
        setCounter(counter - 1)
    }*/

    const increment = useCallback(() => {
        console.log('increment');
        setCounter(counter + 1)
    }, []);

    const decrement = useCallback(() => {
        console.log('decrement');
        setCounter(counter - 1)
    }, []);

    return (
        <div>
            <span>{counter}</span>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}

export default ReactUseCallbacks; // optimizes function (even after using memo, it was creating new instance so useCallback is used)
