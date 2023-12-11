import React, { useReducer } from "react";

import Button from "./Button";
import "./Bank.css";

const intialState = {
  balance: 0,
  loan: 0,
  isActive: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return {
        ...state,
        balance: state.balance + action.payload,
        isActive: !state.isActive,
      };
    case "loan":
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: state.loan - action.payload,
      };
    case "close":
      return {
        ...state,
        balance: state.balance === 0 ? 0 : state.balance,
        isActive: true,
      };
    default:
      throw new Error("Unknown Action");
  }
}

function Main() {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div className="main">
      <p>Balance: {state.balance < 0 ? 0 : state.balance}</p>
      <p>Loan: {state.loan}</p>
      <Button
        click={() => dispatch({ type: "open", payload: 500 })}
        status={!state.isActive}
      >
        Open Account
      </Button>
      <Button
        click={() => dispatch({ type: "deposit", payload: 150 })}
        status={state.isActive}
      >
        Deposit 150
      </Button>
      <Button
        click={() => dispatch({ type: "withdraw", payload: 50 })}
        status={state.isActive}
      >
        Withdraw 50
      </Button>
      <Button
        click={() => dispatch({ type: "loan", payload: 5000 })}
        status={state.isActive}
      >
        Request loan of 5000
      </Button>
      <Button
        click={() => dispatch({ type: "payLoan", payload: 5000 })}
        status={state.isActive}
      >
        Pay loan
      </Button>
      <Button click={() => dispatch({ type: "close" })} status={state.isActive}>
        Close Account
      </Button>
    </div>
  );
}

export default Main;
