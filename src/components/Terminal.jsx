import React, { useState } from "react";
import "./Terminal.css";

function Terminal() {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  const handleInputChange = (event) => {
    setCurrentInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setHistory([
        ...history,
        { command: currentInput, output: "Output for: " + currentInput },
      ]);
      setCurrentInput("");
    }
  };

  return (
    <div className="terminal">
      {history.map((item, index) => (
        <div key={index}>
          <span className="prompt">$</span> {item.command}
          <br />
          {item.output}
        </div>
      ))}
      <div>
        <span className="prompt">$</span>{" "}
        <input
          type="text"
          value={currentInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default Terminal;
