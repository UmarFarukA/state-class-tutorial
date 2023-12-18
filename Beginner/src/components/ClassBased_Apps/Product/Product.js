import React, { Component } from "react";
import './Product.css';

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5,
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];

class Product extends Component {
    state = {
        cart: [],
        total: 0
    }

    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }

    getTotal = () => {
        const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0);
        return total.toLocaleString(undefined, this.currencyOptions)
    }

    add = (product) => {
        this.setState(state => ({
            cart: [...state.cart, product]
        }))
    }

    remove = (product) => {
        this.setState(prevState => {
            const cart = [...prevState.cart];
            const prodIndex = cart.findIndex(p => p.name === product.name)
            if (prodIndex < 0) {
                return;
            }
            cart.splice(prodIndex, 1);
            return ({
                cart
            })
        })
    }
    render() {
        return (
            <div className="wrapper">
                <div>
                    Shopping Cart:  {this.state.cart.length} total items
                </div>
                <div>
                    Total: {this.getTotal()}
                </div>

                {products.map(product =>
                (
                    <>
                        <div className="product"><span role="img" aria-label={product.name} key={product.name}>{product.emoji}</span></div>
                        <div>
                            Price: {product.price}
                        </div>
                        <button onClick={() => { this.add(product) }}>Add</button>
                        <button onClick={() => { this.remove(product) }}>Remove</button>
                    </>
                )
                )}
            </div>
        )
    }
}

export default Product;