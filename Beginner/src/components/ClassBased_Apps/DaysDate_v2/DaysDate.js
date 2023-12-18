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

    handleChange = (e) => {
        this.setState({
            step: Number(e.target.value)
        })
    }

    handleReset = () => {
        this.setState({
            step: 1,
            count: 0
        })
    }


    render() {
        const date = new Date('june 27 2027');
        date.setDate(date.getDate() + this.state.count);
        return (
            <>
                <div className="container">
                    <div className="step">
                        <input
                            type="range"
                            name="step"
                            id="step"
                            min="1"
                            max="10"
                            value={Number(this.state.step)}
                            onChange={this.handleChange}
                        />
                        <span>{this.state.step}</span>
                    </div>
                    <div className="counter">
                        <button onClick={this.handleDecrease}>-</button>
                        <input type="text" value={Number(this.state.count)} />
                        <button onClick={this.handleIncrease}>+</button>

                    </div>
                    <p>{this.state.count === 0 ? "Today is " : this.state.count > 0 ? `${this.state.count} Days from today is ` : `${Math.abs(this.state.count)} Days ago was`} {date.toDateString()}</p>

                    {
                        (this.state.count !== 0 || this.state.step !== 1) ? (
                            <button onClick={this.handleReset}>Reset</button>
                        ) : null
                    }
                </div>
            </>
        )
    }

}

export default Counter;