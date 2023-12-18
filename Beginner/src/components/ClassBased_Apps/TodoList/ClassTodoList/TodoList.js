import React, { Component } from "react";
import "./TodoList.css";
import Header from "../Header/Header";
import { StyleSheet, css } from "aphrodite";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    name: 'Write Code',
                    completed: false
                },
                {
                    id: 2,
                    name: 'Analyse Data',
                    completed: true
                },
                {
                    id: 3,
                    name: 'Watch News',
                    completed: true
                },
                {
                    id: 4,
                    name: 'Relax and Socialise',
                    completed: false
                }
            ],
            currentItem: ''
        }
    }

    handleChange = (e) => this.setState({ currentItem: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault();
        let newId = 1;
        let sortedList = this.state.list.splice().sort((a, b) => (a.id - b.id))
        for (let j = 0; j < sortedList.length; j++) {
            if (newId === sortedList[j].id) {
                newId++
            }
        }

        this.setState(prevState => {
            const newItem = {
                id: newId,
                name: prevState.currentItem,
                completed: false
            }

            return {
                list: [...prevState.list, newItem],
                currentItem: ''
            }
        })
    }

    toggleCompleted = (id) => {
        this.setState(() => {
            return {
                list: this.state.list.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
            }
        })
    }

    deleteTodos = (id) => {
        let filteredList = this.state.list.filter(item => item.id !== id)
        this.setState({
            list: [...filteredList]
        })
    }
    render() {
        return (
            <div className="Container">
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.currentItem}
                        placeholder="Enter a todo name"
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
                <div className="">
                    {this.state.list.length > 0 ? (
                        <ul>
                            {

                                this.state.list.map(item => (
                                    <div className="todo-items">
                                        <li
                                            key={item.id}
                                            onClick={() => this.toggleCompleted(item.id)} className={item.completed ? css(style.complete) : css(style.inComplete)}>{item.name}
                                        </li>
                                        <button className="btn-delete" onClick={() => this.deleteTodos(item.id)}>Delete</button>
                                    </div>
                                ))

                            }
                        </ul>
                    ) : "There are no todo lists"}
                </div>
            </div>
        );
    }
}

const style = StyleSheet.create({
    complete: {
        textDecoration: "line-through"
    },
    inComplete: {
        textDecoration: "none"
    }
})

export default TodoList;