import React, {useEffect, useRef, useState} from "react";

function ReactUseRefs() {
    const [counter, setCounter] = useState(0);
    const refCounter = useRef(0);
    const userName = useRef(null);
    const password = useRef(null);

    useEffect(() => {
        console.log('in useEffect', counter)
    }, [counter])


    const incrementRefCounter = () => {
        refCounter.current += 1;
        setCounter(refCounter.current);
    }

    const decrementRefCounter = () => {
        refCounter.current -= 1;
        setCounter(refCounter.current);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('form Values', userName.current.value, password.current.value);
    }

    return (
        <div>
            <span>State: {counter}</span>
            <span>Ref: {refCounter.current}</span>
            <button className="generic-btn" onClick={incrementRefCounter}>Increment</button>
            <button className="generic-btn" onClick={decrementRefCounter}>Decrement</button>


            <form onSubmit={onSubmit}>
                <input className="border-solid rounded-xs" type="text" id="username" ref={userName}/>
                <input className="border-solid rounded-xs" type="text" id="password" ref={password}/>
                <button className="generic-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ReactUseRefs;
