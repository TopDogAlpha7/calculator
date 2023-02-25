import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (e) => {
    setInput(input + e.target.name);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={input} disabled />
        <div className="row">
          <button name="7" onClick={handleButtonClick}>
            7
          </button>
          <button name="8" onClick={handleButtonClick}>
            8
          </button>
          <button name="9" onClick={handleButtonClick}>
            9
          </button>
          <button name="*" onClick={handleButtonClick}>
            x
          </button>
        </div>
        <div className="row">
          <button name="4" onClick={handleButtonClick}>
            4
          </button>
          <button name="5" onClick={handleButtonClick}>
            5
          </button>
          <button name="6" onClick={handleButtonClick}>
            6
          </button>
          <button name="/" onClick={handleButtonClick}>
            ÷
          </button>
        </div>
        <div className="row">
          <button name="1" onClick={handleButtonClick}>
            1
          </button>
          <button name="2" onClick={handleButtonClick}>
            2
          </button>
          <button name="3" onClick={handleButtonClick}>
            3
          </button>
          <button name="+" onClick={handleButtonClick}>
            +
          </button>
        </div>
        <div className="row">
          <button name="." onClick={handleButtonClick}>
            .
          </button>
          <button name="0" onClick={handleButtonClick}>
            0
          </button>
          <button name="=" onClick={handleCalculate}>
            =
          </button>
          <button name="-" onClick={handleButtonClick}>
            -
          </button>
        </div>
        <div className="row">
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
