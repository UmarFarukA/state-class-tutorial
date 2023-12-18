import React, { useReducer } from "react";

const initialState = {
    fNum: 0,
    sNum: 0,
    result: 0
};

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return { ...state, result: state.fNUm + state.sNum }
        case "subtract":
            return;
        case "divide":
            return;
        case "multiply":
            return;
        default:
            return;
    }
}


function Calculator() {

    // const [firstNum, setFirstNum] = useState(0);
    // const [secNum, setSecNum] = useState(0);
    // const [result, setResult] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState)

    // const handleSecondNum = e => {

    // }

    // const handleFirstNum = (e) => {

    // }
    const handleAdd = (e) => {
        dispatch({
            type: 'add',
            field: e.target.name,
            payload: e.target.value
        })

    }

    return (
        <React.Fragment>
            <div className="container" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input type="number" name="fnum" value={state.fNum} />
                <input type="number" name="snum" value={state.sNum} />
                <button onClick={handleAdd}>Add</button>
                <hr />
                <span>{state.result}</span>
            </div>
        </React.Fragment>
    )
}

export default Calculator;