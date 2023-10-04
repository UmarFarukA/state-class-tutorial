import React, { useReducer } from "react";
import "./Course.css";

// const description = [
//     "Learn React",
//     "Apply for Job",
//     "Invest your Income"
// ];

const initialState = {
    step: 1,
    messages: [
        "Learn React",
        "Apply for Job",
        "Invest your Income"
    ],
    close: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'next':
            if (state.step < 3) {
                return { step: state.step + 1, messages: state.messages }
            }
            break;
        case 'previous':
            if (state.step > 1) {
                return { step: state.step - 1, messages: state.messages }
            }
            break;
        case 'close':
            return { step: state.step, messages: state.messages, close: !action.payload }

        default:
            return 'Not available'
    }
}

function Course() {

    // const [step, setStep] = useState(1);
    const [state, dispatch] = useReducer(reducer, initialState)

    const handlePrevious = () => {
        dispatch({
            type: "previous",
        })
        // if (step > 1) setStep(s => s - 1);
    }

    const handleNext = () => {
        // if (step < 3) setStep(s => s + 1)
        dispatch({
            type: "next",
        })
    }

    const handleClose = () => {
        dispatch({
            type: 'close',
            payload: state.close
        })
    }

    return (
        <>
            <div className="close" onClick={handleClose}>&times;</div>
            {state.close && (
                <div className="container">
                    <div className="section">
                        <div className="section_number">
                            <div className={state.step >= 1 ? 'active' : ''}>1</div>
                            <div className={state.step >= 2 ? 'active' : ''}>2</div>
                            <div className={state.step >= 3 ? 'active' : ''}>3</div>
                        </div>

                        <div className="message">
                            <p>{state.messages[state.step - 1]}</p>
                        </div>
                        <div className="navigation">
                            <button className="btn" onClick={handlePrevious}>Previous</button>
                            <button className="btn" onClick={handleNext}>Next</button>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default Course