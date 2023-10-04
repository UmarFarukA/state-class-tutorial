import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <h1 className="header-title">Todo List App</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Header