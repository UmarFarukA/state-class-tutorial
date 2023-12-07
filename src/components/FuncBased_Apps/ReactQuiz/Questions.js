import React from "react";
import Option from "./Options";
import NextButton from "./NextButton";

export default function Questions({
  questions,
  dispatch,
  answer,
  index,
  numQuestions,
}) {
  return (
    <div className="questions">
      <h3>{questions.question}</h3>
      <Option questions={questions} dispatch={dispatch} answer={answer} />
      {answer !== null && (
        <NextButton
          dispatch={dispatch}
          index={index}
          numQuestions={numQuestions}
        />
      )}
    </div>
  );
}
