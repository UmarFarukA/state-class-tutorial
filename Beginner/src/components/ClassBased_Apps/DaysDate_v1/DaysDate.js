import React from "react";
// import {addDays } from "date-fns";
import "./DaysDate.css";


class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            step: 1
        }
    }

    handleStepDecrease = () => {
        this.setState({
            step: this.state.step - 1
        })
    }

    handleStepIncrease = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    handleDecrease = () => {
        this.setState({
            count: this.state.count - this.state.step
        })
    }

    handleIncrease = () => {
        this.setState({
            count: this.state.count + this.state.step
        })
    }


    render() {
        const date = new Date('june 27 2027');
        date.setDate(date.getDate() + this.state.count);
        return (
            <>
                <div className="container">
                    <div className="step">
                        <button onClick={this.handleStepDecrease}>-</button>
                        <p>Step: {this.state.step}</p>
                        <button onClick={this.handleStepIncrease}>+</button>
                    </div>
                    <div className="counter">
                        <button onClick={this.handleDecrease}>-</button>
                        <p>Counter: {this.state.count}</p>
                        <button onClick={this.handleIncrease}>+</button>

                    </div>
                    <p>{this.state.count === 0 ? "Today is " : this.state.count > 0 ? `${this.state.count} Days from today is ` : `${Math.abs(this.state.count)} Days ago was`} {date.toDateString()}</p>
                </div>
            </>
        )
    }

}

export default Counter;