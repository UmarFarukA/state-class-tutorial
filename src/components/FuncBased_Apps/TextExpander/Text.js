import React from "react";
import "./Text.css";

function Main() {
  return (
    <>
      <Text>This is the beginnig of Text</Text>
    </>
  );
}

function Text({ children }) {
  return <p>{children}</p>;
}

export default Main;
