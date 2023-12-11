import React from "react";

export default function NextButton({ dispatch, numQuestions, index }) {
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-next"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-next"
        onClick={() => dispatch({ type: "end" })}
      >
        Finish
      </button>
    );
}
