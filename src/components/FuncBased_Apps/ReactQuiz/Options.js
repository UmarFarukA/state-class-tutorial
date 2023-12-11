import React from "react";

export default function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <>
      {questions.options.map((option, index) => (
        <button
          className={`option ${index === answer ? "option" : ""} ${
            hasAnswered
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={index}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: {
                index,
                point: index === questions.correctOption ? questions.points : 0,
              },
            })
          }
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </>
  );
}
