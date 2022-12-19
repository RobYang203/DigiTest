import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="result">1234</header>
      <div className="inputContainer">
        <div className="leftSide">
          <button className="button row-container">C</button>
          <button className="button row-container">DEL</button>
          <button className="button row-container">÷</button>
          <button className="button row-container">7</button>
          <button className="button row-container">8</button>
          <button className="button row-container">9</button>
          <button className="button row-container">4</button>
          <button className="button row-container">5</button>
          <button className="button row-container">6</button>
          <button className="button row-container">1</button>
          <button className="button row-container">2</button>
          <button className="button row-container">3</button>
          <button className="button row-container two-row">0</button>
          <button className="button row-container">.</button>
        </div>
        <div className="rightSide">
          <button className="button col-container">×</button>
          <button className="button col-container">-</button>
          <button className="button col-container">+</button>
          <button className="button col-container two-col">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
