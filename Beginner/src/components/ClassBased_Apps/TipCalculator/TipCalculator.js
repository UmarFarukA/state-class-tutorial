import React from "react";
import "./TipCalculator.css";

class TipCalculator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      amount: 0,
      uSatisfy: "dissatisfy",
      fSatisfy: "fdissertisfy",
      uChoice: 0,
      fChoice: 0,
      discount: 0,
    };
  }

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleUserChoice = (e) => {
    this.setState({
      uSatisfy: e.target.value,
    });
  };

  handleFriendChoice = (e) => {
    this.setState({
      fSatisfy: e.target.value,
    });
  };

  handleReset = () => {
    this.setState({
      amount: 0,
      uSatisfy: "dissatisfy",
      fSatisfy: "fdissertisfy",
      uChoice: 0,
      fChoice: 0,
      discount: 0,
    });
  };

  render() {
    if (this.state.uSatisfy === "dissatisfy") {
      this.setState({
        uChoice: 0,
      });
    }

    if (this.state.uSatisfy === "ok") {
      this.setState({
        uChoice: 0.05,
      });
    }

    if (this.state.uSatisfy === "good") {
      this.setState({
        uChoice: 0.1,
      });
    }

    if (this.state.uSatisfy === "cool") {
      this.setState({
        uChoice: 0.15,
      });
    }

    if (this.state.fSatisfy === "fdissatisfy") {
      this.setState({
        fChoice: 0,
      });
    }

    if (this.state.fSatisfy === "fbad") {
      this.setState({
        fChoice: 0.05,
      });
    }

    if (this.state.fSatisfy === "famazing") {
      this.setState({
        fChoice: 0.1,
      });
    }

    if (this.state.fSatisfy === "fexcellent") {
      this.setState({
        fChoice: 0.15,
      });
    }

    this.setState({
      discount:
        this.state.amount * this.state.uChoice +
        this.state.amount * this.state.fChoice,
    });

    let totalBill =
      parseFloat(this.state.amount) + parseFloat(this.state.discount);
    return (
      <div className="container">
        <InputBill
          amount={this.state.amount}
          handleAmount={this.handleAmount}
        />
        <ServiceBill text="How did you like the service?">
          <select
            name="user"
            id="user"
            value={this.state.uSatisfy}
            onChange={this.handleUserChoice}
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
            value={this.state.fSatisfy}
            onChange={this.handleFriendChoice}
          >
            <option value="fdissertisfy">Dissertisfied(0%)</option>
            <option value="fbad">Not Bad (5%)</option>
            <option value="famzing">Amzing(10%)</option>
            <option value="fexcellent">Excellent(15%)</option>
          </select>
        </ServiceBill>

        <OutputBill
          bill={this.state.amount}
          discount={this.state.discount}
          totalBill={totalBill}
          amount={this.state.amount}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}

class InputBill extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="content">
        <p>How much was the bill?</p>
        <input
          type="text"
          name="bill"
          placeholder="enter the bill"
          value={Number(this.props.amount)}
          onChange={this.props.handleAmount}
        />
      </div>
    );
  }
}

class ServiceBill extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="content">
        <p>{this.props.text}</p>
        {this.props.children}
      </div>
    );
  }
}

class OutputBill extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <p className="output">
          You Pay ${this.props.amount && this.props.totalBill} ($
          {this.props.bill} + ${this.props.discount}) tip
        </p>

        {this.props.totalBill > 0 ? (
          <button onClick={this.props.handleReset} className="reset">
            Reset
          </button>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default TipCalculator;
