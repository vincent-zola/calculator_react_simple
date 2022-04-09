import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import * as math from "mathjs";

const App = () => {
  // stores our typed input
  const [text, setText] = useState("");
  // stores result
  const [result, setResult] = useState("");
  // shows calculation next to setResult
  const [calculation, setCalculation] = useState(null);
  // Add item to text array
  const addToText = (val) => {
    setText((text) => [...text, val]);
  };
  // Delete last item from text array
  const removeFromText = () => {
    setText((text) => text.slice(0, -1));
  };

  const calculateResult = () => {
    // Remove commas inside the array
    const input = text.join("");
    try {
      setResult(math.evaluate(input));
      setCalculation([...text])
      setText("");
    } catch (error) {
      setResult("Syntax not supported, press Clear and try again");
      setCalculation(null)
    }
  };
  // Clear console
  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} calculation={calculation} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="mistakes">
          <Button symbol="Clear" color="#8A3333" handleClick={resetInput} />
          <Button symbol="DEL" color="#C25959" handleClick={removeFromText} />
        </div>
      </div>
    </div>
  );
};

export default App;
