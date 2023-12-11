import React, { useEffect } from "react";

export default function Timer({ dispatch, minSecond }) {
  const mins = Math.floor(minSecond / 60);
  const sec = minSecond % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="btn btn-timer">
      {mins < 10 && "0"}
      {mins} : {sec < 10 && "0"}
      {sec}
    </div>
  );
}
