import { useState } from "react";
// import {addDays } from "date-fns";
import "./DaysDate.css";


function Counter() {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1)

    const handleIncrease = () => {
        setCount(prevCount => prevCount + step);
    }
    const handleDecrease = () => {
        setCount(prevCount => prevCount - step);
    }

    const handleStepIncrease = () => setStep((step) => step + 1);

    const handleStepDecrease = () => setStep((step) => step - 1);

    const date = new Date('june 27 2027');
    date.setDate(date.getDate() + count);

    return (
        <>
            <div className="container">
                <div className="step">
                    <button onClick={handleStepDecrease}>-</button>
                    <p>Step: {step}</p>
                    <button onClick={handleStepIncrease}>+</button>
                </div>
                <div className="counter">
                    <button onClick={handleDecrease}>-</button>
                    <p>Counter: {count}</p>
                    <button onClick={handleIncrease}>+</button>

                </div>
                <p>{count === 0 ? "Today is " : count > 0 ? `${count} Days from today is ` : `${Math.abs(count)} Days ago was`} {date.toDateString()}</p>
            </div>
        </>
    )
}

export default Counter;