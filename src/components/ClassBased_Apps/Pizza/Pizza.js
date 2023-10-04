import React, { Component } from "react";
import "./Pizza.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: require("./pizzas/focaccia.jpg"),
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: require("./pizzas/margherita.jpg"),
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: require("./pizzas/spinaci.jpg"),
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: require("./pizzas/funghi.jpg"),
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: require("./pizzas/salamino.jpg"),
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: require("./pizzas/prosciutto.jpg"),
        soldOut: false,
    },
]


class Pizza extends Component {


    render() {
        return (
            <div className="container">
                <ul className="pizzas">
                    {pizzaData.length > 0 && (
                        pizzaData.map(data => (

                            <PizzaItem data={data} />
                        ))
                    )}
                </ul>
                <div>
                    <button className="btn"><h2>Order</h2></button>
                </div>
            </div>
        )
    }
}

class PizzaItem extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <li>
                <img src={this.props.data.photoName} alt={this.props.data.name} width={90} />
                <div>
                    <h3>{this.props.data.name}</h3>
                    <p>{this.props.data.ingredients}</p>
                    <span>{this.props.data.price}</span>
                </div>
            </li>
        )
    }
}
class Menu extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="menu">
                    <h2>Our Menu</h2>
                </div>
                <Pizza />
                <Footer />
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>FAST REACT PIZZA CO.</h1>
            </header>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <>
            </>
        )
    }
}

export default Menu;