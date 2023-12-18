import React from "react";
import logo from "./logo.png";

function Header() {
  return (
    <div className="app-header">
      <img src={logo} alt="React App" />
      <h2>The React Quiz</h2>
    </div>
  );
}

export default Header;
