import React from "react";
import Option from "./Options";
import NextButton from "./NextButton";
import Footer from "./Footer";
import Timer from "./Timer";

export default function Questions({
  questions,
  dispatch,
  answer,
  index,
  numQuestions,
  minSecond,
}) {
  return (
    <div className="questions">
      <h3>{questions.question}</h3>
      <Option questions={questions} dispatch={dispatch} answer={answer} />
      <Footer>
        <Timer dispatch={dispatch} minSecond={minSecond} />
        {answer !== null && (
          <NextButton
            dispatch={dispatch}
            index={index}
            numQuestions={numQuestions}
          />
        )}
      </Footer>
    </div>
  );
}
