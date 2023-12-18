import { useReducer } from "react";
// import {addDays } from "date-fns";
import "./DaysDate.css";

const initialState = { count: 0, range: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + state.range };
    case "decrease":
      return { ...state, count: state.count - state.range };
    case "reset":
      return initialState;
    case "changeCount":
      return { ...state, count: action.payload };
    case "changeRange":
      return { ...state, range: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = (e) => {
    dispatch({
      type: "increase",
    });
  };
  const handleDecrease = (e) => {
    dispatch({
      type: "decrease",
    });
  };

  const handleChangeCount = (e) => {
    dispatch({
      type: "changeCount",
      payload: Number(e.target.value),
    });
  };

  const handleChangeRange = (e) => {
    dispatch({
      type: "changeRange",
      payload: Number(e.target.value),
    });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const date = new Date("june 27 2027");
  date.setDate(date.getDate() + state.count);

  return (
    <>
      <div className="container">
        <div className="step">
          <input
            type="range"
            min="1"
            max="10"
            value={Number(state.range)}
            onChange={handleChangeRange}
          />{" "}
          <span>{state.range}</span>
        </div>
        <div className="counter">
          <button onClick={handleDecrease}>-</button>
          <input
            type="text"
            value={Number(state.count)}
            onChange={handleChangeCount}
          />
          <button onClick={handleIncrease}>+</button>
        </div>

        <p>
          {state.count === 0
            ? "Today is "
            : state.count > 0
            ? `${state.count} Days from today is `
            : `${Math.abs(state.count)} Days ago was`}{" "}
          {date.toDateString()}
        </p>

        {state.count > 0 ? (
          <button onClick={handleReset}>Reset</button>
        ) : state.count < 0 ? (
          <button onClick={handleReset}>Reset</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Counter;
