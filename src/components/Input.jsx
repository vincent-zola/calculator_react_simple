import React from "react";
import "./Input.css";

const Input = ({
  text,
  result,
  calculation,
  setText,
  calculateResult,
  
}) => {
  // If Enter is pressed in Input field than calculate result
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calculateResult();
    }
  };

  return (
    <div className="input-wrapper">
      <div className="result">
        {/* Show calculation from input at the top of the screen */}
        {calculation && <p onClick={() => setText(calculation)} >({calculation})</p>}
        {/* Show result in green or Error-text in red depending if result is a number or not */}
        {isNaN(result) ? (
          <h1 className="error-text">{result}</h1>
        ) : (
          // onClick copy result to Input 
          <h1 onClick={() => setText((result).toString())} className="result-text">
            {result}
          </h1>
        )}
      </div>
      {/* Input for our numbers */}
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="|"
        type="text"
        onKeyPress={handleKeyPress}
        // By start of the App Input will be focused, cursor blinks, user can type immediately, disabled because bad at phones
        // autoFocus
        // onBlur={({ target }) => target.focus()}
      ></input>
    </div>
  );
};

export default Input;
