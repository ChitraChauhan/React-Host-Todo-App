import React, {useRef} from "react";

function Count({bioData}) {

    const refCounter = useRef(0);
    return (
        <div>
            <div>Render count value: {refCounter.current++}</div>
            <span>My name is {bioData.name}</span>
        </div>
    )
}

export default React.memo(Count);  // optimize component until props are passed. If props are passed to avoid this component to re-render, need to use useMEmo for biodata object
