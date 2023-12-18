import React from "react";
import "./Course.css"

class Course extends React.Component {

    constructor() {
        super()
        this.state = {
            step: 1,
            messages: [
                "Learn React",
                "Apply for Job",
                "Invest your Income"
            ],
            close: false
        }
    }

    handlePrevious = () => {
        if (this.state.step > 1) {
            return this.setState({ step: this.state.step - 1 })
        }
    }

    handleNext = () => {
        if (this.state.step < 3) {
            return this.setState({ step: this.state.step + 1 });
        }
    }

    handleClose = () => {
        this.setState({ close: !this.state.close });
    }

    render() {
        return (
            <>
                <div className="close" onClick={this.handleClose}>&times;</div>
                {this.state.close && (
                    <div className="container">
                        <div className="section">
                            <div className="section_number">
                                <div className={this.state.step >= 1 && 'active'}>1</div>
                                <div className={this.state.step >= 2 ? 'active' : ''}>2</div>
                                <div className={this.state.step >= 3 ? 'active' : ''}>3</div>
                            </div>

                            <div className="message">
                                <p>{this.state.messages[this.state.step - 1]}</p>
                            </div>
                            <div className="navigation">
                                <Button onClick={this.handlePrevious}>
                                    <span>👈</span>Previous
                                </Button>
                                <Button onClick={this.handleNext}>
                                    Next<span>👉</span>
                                </Button>
                            </div>
                        </div>

                    </div>
                )}
            </>
        )
    }
}

class Button extends React.Component {

    render() {
        return (
            <button className="btn" onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}

export default Course;