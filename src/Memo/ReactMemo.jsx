import React, {useMemo, useState} from "react";
import Count from "./count.jsx";

function ReactMemo() {
    const [counter, setCounter] = useState(0);
    const  myBioData = useMemo(() => {
        return {
            name: "chitra",
            age: 30
        }
    }, [])

    return (
        <div>
            <button className="generic-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <Count bioData={myBioData} />
        </div>
    );
}

export default ReactMemo;
