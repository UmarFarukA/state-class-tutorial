import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Start from "./Start";
import Questions from "./Questions";

import "./ReactQuiz.css";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "start" };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload.index,
        points: state.points + action.payload.point,
      };
    case "nextQuestion":
      return { ...state, answer: null, index: state.index + 1 };
    case "end":
      return { ...state, status: "end" };
    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
      };
    default:
      throw new Error("Unknown Action");
  }
}

function MainApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(dispatch({ type: "dataFailed" }));
  }, []);

  const numQuestions = state.questions.length;
  const maxPossiblePoints = state.questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  return (
    <div className="container">
      <Header />
      <Main>
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && (
          <Start numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {state.status === "start" && (
          <>
            <Progress
              index={state.index}
              numQuestions={numQuestions}
              points={state.points}
              maxPossiblePoints={maxPossiblePoints}
              answer={state.answer}
            />
            <Questions
              questions={state.questions[state.index]}
              dispatch={dispatch}
              answer={state.answer}
              index={state.index}
              numQuestions={numQuestions}
            />
          </>
        )}

        {state.status === "end" && (
          <FinishScreen
            points={state.points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default MainApp;
