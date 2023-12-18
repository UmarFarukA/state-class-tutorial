import React, { useState } from "react";
import "./Text.css";

function Main() {
  return (
    <div className="container">
      <Text wordCount={15}>
        This is the beginnig of Text this is also a random text This is the
        beginnig of Text this is also a random text This is the beginnig of Text
        this is also a random text This is the beginnig of Text this is also a
        random text
      </Text>
      <Text wordCount={20} visible={true}>
        This is the beginnig of Text this is also a random text This is the
        beginnig of Text this is also a random text This is the beginnig of Text
        this is also a random text This is the beginnig of Text this is also a
        random text
      </Text>
    </div>
  );
}

function Text({ children, visible = false, wordCount = 25 }) {
  const [showText, setShowText] = useState(visible);

  const handleToggle = () => {
    setShowText((prevState) => !prevState);
  };
  return (
    <div className="content">
      <p>
        {showText ? children.split(" ").slice(0, wordCount) + " ..." : children}
        <button onClick={handleToggle}>
          {showText ? "Show Text" : "Hide Text"}
        </button>
      </p>
    </div>
  );
}

export default Main;
