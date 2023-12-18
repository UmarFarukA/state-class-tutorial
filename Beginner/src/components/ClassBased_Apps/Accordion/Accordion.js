import React, { useState } from "react";
import "./Accordion.css";
import { render } from "@testing-library/react";

const faqs = [
    {
        title: "What does Frontend development entails?",
        text: "Frontend development entails learning concepts such as HTML, CSS, JavaScript. In addition to learning a framework such as React, Angular, Vue, etc."

    },

    {
        title: "What does Backend development entails?",
        text: "Backend development entails learning concepts such as Python/PHP/Java, Database, Security. In addition to learning a framework such Flask, Laravel/Livewire, Spring"

    },

    {
        title: "Who is a fullstack developer",
        text: "A fullstack developer is one who leans all the frontend and backend technologies towards developing a robust application"

    }
]


class Accordion extends React.Component {
    render() {
        return (
            <>
                {
                    faqs.map((el, i) => <AccordionItem num={i} title={el.title} text={el.text}/>)
                }
            </>
        )
    }
}

class AccordionItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className="container">
                <div className={`header ${this.state.isOpen ? "content-color" : ""}`   } onClick={this.handleToggle}>
                    <p className="num">{this.props.num < 10 ? `0${this.props.num + 1}` : this.props.num}</p>
                    <p className="title">{this.props.title}</p>
                    <p className="icon">{this.state.isOpen ? "-" : "+"}</p>
                </div>
                {this.state.isOpen && 
                    <div className="content">
                        <p>{this.props.text}</p>
                    </div>
                }
            </div>
        )
    }
}


export default Accordion;