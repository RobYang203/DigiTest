import React, { useState } from "react";
import "./App.css";

function App() {
  const [numberArray, setNumberArray] = useState<string[]>(["", ""]);
  const [command, setCommand] = useState<string>("");
  const [answer, setAnswer] = useState<string>("0");

  const showCurrentAnswer = (
    number1: string,
    number2: string,
    command: string
  ) => {
    const value = !!command ? number1 + command + number2 : number1;

    setAnswer(() => value);
  };

  const handleNumberClick = (value: string) => () => {
    const index = !!command ? 1 : 0;
    const currentValue = numberArray[index];
    const nextValue = currentValue + value;

    numberArray[index] = nextValue;

    setNumberArray(() => [...numberArray]);
    showCurrentAnswer(numberArray[0], numberArray[1], command);
  };

  const handleCommandClick = (currentCommand: string) => () => {
    let number1 = "";
    let number2 = "";

    if (!!command) {
      const numberA = Number(numberArray[0]);
      const numberB = Number(numberArray[1]);

      switch (command) {
        case "÷":
          number1 = (numberA / numberB).toString();
          break;
        case "+":
          number1 = (numberA + numberB).toString();
          break;
        case "-":
          number1 = (numberA - numberB).toString();
          break;
        case "×":
          number1 = (numberA * numberB).toString();
          break;
      }
    } else {
      number1 = numberArray[0];
      number2 = numberArray[1];
    }

    setCommand(() => currentCommand);
    setNumberArray(() => [number1, number2]);
    showCurrentAnswer(number1, number2, currentCommand);
  };

  const handleClearCalc = () => {
    setCommand("");
    setNumberArray(["", ""]);
    setAnswer("0");
  };

  const handleCalcAns = () => {
    let value = "";

    const numberA = Number(numberArray[0]);
    const numberB = Number(numberArray[1]);

    switch (command) {
      case "÷":
        value = (numberA / numberB).toString();
        break;
      case "+":
        value = (numberA + numberB).toString();
        break;
      case "-":
        value = (numberA - numberB).toString();
        break;
      case "×":
        value = (numberA * numberB).toString();
        break;
    }

    setCommand("");
    setNumberArray([value, ""]);
    setAnswer(value);
  };

  return (
    <div className="App">
      <header className="result">{answer}</header>
      <div className="inputContainer">
        <div className="leftSide">
          <button className="button row-container" onClick={handleClearCalc}>
            C
          </button>
          <button className="button row-container">DEL</button>
          <button
            className="button row-container"
            onClick={handleCommandClick("÷")}
          >
            ÷
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick("7")}
          >
            7
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick("8")}
          >
            8
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick("9")}
          >
            9
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick("4")}
          >
            4
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick("5")}
          >
            5
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick("6")}
          >
            6
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick("1")}
          >
            1
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick("2")}
          >
            2
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick("3")}
          >
            3
          </button>
          <button
            className="button row-container two-row"
            onClick={handleNumberClick("0")}
          >
            0
          </button>
          <button
            className="button row-container"
            onClick={handleNumberClick(".")}
          >
            .
          </button>
        </div>
        <div className="rightSide">
          <button
            className="button col-container"
            onClick={handleCommandClick("×")}
          >
            ×
          </button>
          <button
            className="button col-container"
            onClick={handleCommandClick("-")}
          >
            -
          </button>
          <button
            className="button col-container"
            onClick={handleCommandClick("+")}
          >
            +
          </button>
          <button
            className="button col-container two-col"
            onClick={handleCalcAns}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
