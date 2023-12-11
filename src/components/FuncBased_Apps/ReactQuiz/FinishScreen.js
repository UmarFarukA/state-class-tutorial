import React from "react";

export default function FinishScreen({ dispatch, points, maxPossiblePoints }) {
  const pointsPercent = (points / maxPossiblePoints) * 100;
  return (
    <>
      <div className="option finish">
        You scored <strong>{points}</strong> out of{" "}
        <strong>{maxPossiblePoints}</strong>{" "}
        <strong>{Math.ceil(pointsPercent)}%</strong>
      </div>
      <button
        className="btn btn-start btn-next"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
