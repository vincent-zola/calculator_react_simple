import React from "react";
import "./Input.css";

const Input = ({ text, result, calculation }) => {
  return (
    <div className="input-wrapper">
      <div className="result">
        { calculation && <p>({calculation})</p>}
        <h1 style={{ color: isNaN(result) ? "#C25959" : "#71D45B" }}>
          {result}
        </h1>
      </div>
      <div className="text">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;
