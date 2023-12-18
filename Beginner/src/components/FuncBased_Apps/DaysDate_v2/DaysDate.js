import { useState } from "react";
// import {addDays } from "date-fns";
import "./DaysDate.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + range);
  };
  const handleDecrease = () => {
    setCount((prevCount) => prevCount - range);
  };

  const handleReset = () => {
    setCount(0);
    setRange(1);
  };

  const date = new Date("june 27 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="container">
        <div className="step">
          <input
            type="range"
            min="1"
            max="10"
            value={Number(range)}
            onChange={(e) => setRange(Number(e.target.value))}
          />{" "}
          <span>{range}</span>
        </div>
        <div className="counter">
          <button onClick={handleDecrease}>-</button>
          <input
            type="text"
            value={Number(count)}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={handleIncrease}>+</button>
        </div>

        <p>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} Days from today is `
            : `${Math.abs(count)} Days ago was`}{" "}
          {date.toDateString()}
        </p>

        {count > 0 ? (
          <button onClick={handleReset}>Reset</button>
        ) : count < 0 ? (
          <button onClick={handleReset}>Reset</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Counter;
