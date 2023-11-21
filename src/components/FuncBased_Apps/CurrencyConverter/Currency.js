import React, { useEffect, useState } from "react";
import "./Currency.css";

function Main() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("USD");
  const [from, setFrom] = useState("EUR");
  const [result, setResult] = useState(0);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const host = "api.frankfurter.app";

  useEffect(
    function () {
      async function getRate() {
        const res = await fetch(
          `https://${host}/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await res.json();
        console.log(data.rates);
        if ((from === "EUR") & (to === "USD")) {
          setResult(data.rates.USD);
        } else if ((from === "USD") & (to === "EUR")) {
          setResult(data.rates.EUR);
        } else if ((from === "EUR") & (to === "EUR")) {
          setResult(data.rates.EUR);
        } else if ((from === "USD") & (to === "USD")) {
          setResult(data.rates.USD);
        }
        console.log(amount, to, from);
      }

      getRate();
    },
    [amount, from, to]
  );

  return (
    <div className="container">
      <div className="main">
        <Input amount={amount} handleAmount={handleAmount} />
        <CurrencyType>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </CurrencyType>
        <CurrencyType>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </CurrencyType>
      </div>

      <Output result={result} />
    </div>
  );
}

function Input({ amount, handleAmount }) {
  return (
    <>
      <input
        type="text"
        name="amount"
        value={Number(amount)}
        placeholder="amount"
        onChange={handleAmount}
      />
    </>
  );
}

function CurrencyType({ children }) {
  return <>{children}</>;
}

function Output({ result }) {
  return <p>{result <= 0 ? "OUTPUT" : result}</p>;
}

export default Main;
