import React from "react";

export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <header className="progress-header">
        <span>
          Question {index + 1} / {numQuestions}
        </span>

        <span>
          {points} / {maxPossiblePoints}
        </span>
      </header>
    </div>
  );
}
