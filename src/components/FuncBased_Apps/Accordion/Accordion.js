import { useState } from "react";
import "./Accordion.css";

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


function Accordion() {
    return (
        <>
            {
                faqs.map((el, i) => <AccordionItem num={i} title={el.title} text={el.text}/>)
            }
        </>
    )
}

function AccordionItem({num, title, text}) {

    const [isOpen, setOpen] = useState(false)

    function handleToggle() {
        setOpen(!isOpen)
    }

    return (
        <div className="container">
            <div className={`header ${isOpen ? "content-color" : ""}`   } onClick={handleToggle}>
                <p className="num">{num < 10 ? `0${num + 1}` : num}</p>
                <p className="title">{title}</p>
                <p className="icon">{isOpen ? "-" : "+"}</p>
            </div>
            {isOpen && 
                <div className="content">
                    <p>{text}</p>
                </div>
            }
        </div>
    )
}


export default Accordion;