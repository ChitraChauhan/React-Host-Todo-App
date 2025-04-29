import React, {useEffect, useState} from "react";

function ReactUseState() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('in useEffect', counter)
        /* return () => {
            setCounter(0);
          }*/
    }, [counter])


    return (
        <div>
            <span>{counter}</span>
            <button className="generic-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="generic-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}

export default ReactUseState;
