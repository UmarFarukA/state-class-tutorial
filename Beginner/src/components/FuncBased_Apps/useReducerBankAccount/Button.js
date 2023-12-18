import React from "react";

export default function Button({ children, click, status }) {
  return (
    <button onClick={click} disabled={status}>
      {children}
    </button>
  );
}
