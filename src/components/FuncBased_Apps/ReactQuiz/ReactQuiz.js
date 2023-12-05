import React, { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import "./ReactQuiz.css";
import { useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, questions: "" };
    default:
      throw new Error("Unknown Action");
  }
}

function MainApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((res) => console.log(res))
      .then((data) => data.json())
      .catch("");
  }, []);
  return (
    <div className="container">
      <Header />
      <Main></Main>
    </div>
  );
}

export default MainApp;
