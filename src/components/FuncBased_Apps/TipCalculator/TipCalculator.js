import { useState } from "react";
import "./TipCalculator.css";

function TipCalculator() {
  const [amount, setAmount] = useState(0);
  const [uSatisfy, setUSatisfy] = useState("dissatisfy");
  const [fSatisfy, setFSatisfy] = useState("fdissertisfy");

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleUserChoice = (e) => {
    setUSatisfy(e.target.value);
  };

  const handleFriendChoice = (e) => {
    setFSatisfy(e.target.value);
  };

  const handleReset = () => {
    setAmount(0);
    setFSatisfy("dissatisfy");
    setFSatisfy("fdissertisfy");
  };

  let uChoice = 0;
  let fChoice = 0;

  if (uSatisfy === "dissatisfy") uChoice = 0;

  if (uSatisfy === "ok") uChoice = 0.05;

  if (uSatisfy === "good") uChoice = 0.1;

  if (uSatisfy === "cool") uChoice = 0.15;

  if (fSatisfy === "fdissatisfy") fChoice = 0;

  if (fSatisfy === "fbad") fChoice = 0.05;

  if (fSatisfy === "famazing") fChoice = 0.1;

  if (fSatisfy === "fexcellent") fChoice = 0.15;

  let discount = amount * uChoice + amount * fChoice;
  let totalBill = parseFloat(amount) + parseFloat(discount);

  return (
    <div className="container">
      <InputBill amount={amount} handleAmount={handleAmount} />
      <ServiceBill text="How did you like the service?">
        <select
          name="user"
          id="user"
          value={uSatisfy}
          onChange={handleUserChoice}
        >
          <option value="dissatisfy">Dissertisfied(0%)</option>
          <option value="ok">It was ok (5%)</option>
          <option value="good">It was good (10%)</option>
          <option value="cool">It was supper cool (15%)</option>
        </select>
      </ServiceBill>
      <ServiceBill text="How did your friend like the service?">
        <select
          name="friend"
          id="friend"
          value={fSatisfy}
          onChange={handleFriendChoice}
        >
          <option value="fdissertisfy">Dissertisfied(0%)</option>
          <option value="fbad">Not Bad (5%)</option>
          <option value="famzing">Amzing(10%)</option>
          <option value="fexcellent">Excellent(15%)</option>
        </select>
      </ServiceBill>

      <OutputBill
        bill={amount}
        discount={discount}
        totalBill={totalBill}
        amount={amount}
        handleReset={handleReset}
      />
    </div>
  );
}

function InputBill({ amount, handleAmount }) {
  return (
    <div className="content">
      <p>How much was the bill?</p>
      <input
        type="text"
        name="bill"
        placeholder="enter the bill"
        value={Number(amount)}
        onChange={handleAmount}
      />
    </div>
  );
}

function ServiceBill({ text, children }) {
  return (
    <div className="content">
      <p>{text}</p>
      {children}
    </div>
  );
}

function OutputBill({ bill, totalBill, discount, amount, handleReset }) {
  return (
    <>
      <p className="output">
        You Pay ${amount && totalBill} (${bill} + ${discount}) tip
      </p>

      {totalBill > 0 ? (
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default TipCalculator;
