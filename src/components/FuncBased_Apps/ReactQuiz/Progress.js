import React from "react";

export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <header className="progress-header">
        <p>
          Question {index + 1} / {numQuestions}
        </p>

        <p>
          {points} / {maxPossiblePoints}
        </p>
      </header>
    </>
  );
}
