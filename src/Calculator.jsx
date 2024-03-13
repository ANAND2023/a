import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    setExpression((e) => e + value);
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
  };

  return (
    <div className="container text-center bg">
      <div className= "center">
     <div className="row">
     {/* <input type="text" className="input"/> */}
      <div className="input">{expression}</div>
   </div>
      <div className="row">
        <button className="button cursor-pointer" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="button" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="button" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button className="button" onClick={() => handleButtonClick("+")}>
          +
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="button" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="button" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button className="button" onClick={() => handleButtonClick("-")}>
          -
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="button" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="button" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button className="button" onClick={() => handleButtonClick("*")}>
          *
        </button>
      </div>
      <div className="row">
        <button className="button" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button className="button" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button className="button" onClick={calculateResult}>
          =
        </button>
        <button className="button" onClick={() => handleButtonClick("/")}>
          /
        </button>
      </div>
      <div className="row">
        <button  className="clear" onClick={clearExpression}>
          Clear
        </button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
