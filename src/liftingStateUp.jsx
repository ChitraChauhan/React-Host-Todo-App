import {useState} from "react";

export const LiftingStateUp = () => {
    const [inputValue, setInputValue] = useState('')
    return (
        <>
            <ChildComponent inputValue={inputValue} setInputValue={setInputValue}/>
            <SiblingComponent inputValue={inputValue}/>
        </>
    )

}

const ChildComponent = ({inputValue, setInputValue}) => {
    console.log('ChildComponent', inputValue)
    return (
        <>
            <input className="border-solid rounded-xs" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </>
    )
}

const SiblingComponent = ({inputValue}) => {
    console.log('SiblingComponent', inputValue)
    return (
        <>
            <div>The Input value is: {inputValue}</div>
        </>
    )
}
