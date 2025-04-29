import './App.css';
import ReactUseState from "./useState.jsx";
import ReactUseRefs from "./useRefs.jsx";
import ReactMemo from "./Memo/ReactMemo.jsx";
import ReactUseMemo from "./Memo/useMemo.jsx";
import ReactUseCallbacks from "./useCallbacks.jsx";
import ReactUseEffect from "./UseEffect.jsx";
import {LiftingStateUp} from "./liftingStateUp.jsx";
import {TodoApp} from "./Todo/Todo.jsx";

function App() {
    return (
        <div>
            {/* <div className="mb-5 shadow-2xl">
                <span className="font-bold">Use Effect</span>
                <ReactUseEffect/>
            </div>
            <div className="mb-5 shadow-2xl">
                <h2>Use State</h2>
                <ReactUseState/>
            </div>
            <div className="mb-5 shadow-2xl">
                <h2>Use Ref</h2>
                <ReactUseRefs/>
            </div>
            <div className="mb-5 shadow-2xl">
                <h2>React.Memo</h2>
                <ReactMemo/>
            </div>
            <div className="mb-5 shadow-2xl">
                <h2>Use Memo</h2>
                <ReactUseMemo/>
            </div>
            <div className="mb-5 shadow-2xl">
                <h2>Use Callback</h2>
                <ReactUseCallbacks/>
            </div>
            <div className="mb-5 shadow-2xl">
                <h2>Lifting State Up</h2>
                <LiftingStateUp/>
            </div>*/}
            <div className="todo-container">
                <h1 className="header">Todo List</h1>
                <TodoApp/>
            </div>
        </div>
    );
}

export default App;
