import React, { useEffect, useRef } from "react";
import "./Input.css";

const Input = ({ text, result, calculation, setText, calculateResult }) => {
  // If Enter is pressed in Input field than calculate result
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calculateResult();
    }
  };

  // * Keypress handler functions
  // grab Input element with useRef
  let calculationInput = useRef();

  // listen to any keypress
  useEffect(() => {
    // if any key is pressed focus on Input Function
    const addToTextKeyboard = () => {
      calculationInput.current.focus();
    };
    // listen for keypress
    document.addEventListener("keydown", addToTextKeyboard);
    // cleanup function
    return () => {
      document.removeEventListener("keydown", addToTextKeyboard);
    };
  }, []);

  return (
    <div className="input-wrapper">
      <div className="result">
        {/* Show calculation from input at the top of the screen */}
        {calculation && (
          <p onClick={() => setText(calculation)}>({calculation})</p>
        )}
        {/* Show result in green or Error-text in red depending if result is a number or not */}
        {isNaN(result) ? (
          <h1 className="error-text">{result}</h1>
        ) : (
          // onClick copy result to Input
          <h1
            onClick={() => setText(result.toString())}
            className="result-text"
          >
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
        // grab Input element with useRef
        ref={calculationInput}
        // ref triggers focus, and that triggers onFocus to calculate the end and set the cursor accordingly.
        onFocus={(e) =>
          e.target.setSelectionRange(
            e.target.value.length,
            e.target.value.length
          )
        }
        // By start of the App Input will be focused, cursor blinks, user can type immediately, disabled because bad at phones
        // autoFocus
        // onBlur={({ target }) => target.focus()}
      ></input>
    </div>
  );
};

export default Input;
