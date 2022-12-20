import React, { useRef, useState } from "react";
import "./App.css";

enum CALC_SIGN {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "×",
  DIVIDED = "÷",
  EMPTY = "",
}

const calcResult = (
  columnA: string,
  columnB: string,
  command: CALC_SIGN
): string => {
  if (!columnA && !columnB) return "";
  else if (!columnB) return columnA + " " + command;

  let result = "";
  const numberA = Number(columnA);
  const numberB = Number(columnB);

  switch (command) {
    case CALC_SIGN.ADD:
      result = (numberA + numberB).toString();
      break;
    case CALC_SIGN.SUBTRACT:
      result = (numberA - numberB).toString();
      break;
    case CALC_SIGN.MULTIPLY:
      result = (numberA * numberB).toString();
      break;
    case CALC_SIGN.DIVIDED:
      result = (numberA / numberB).toString();
      break;
  }

  return result;
};

const showExpression = (
  columnA: string,
  columnB: string,
  command: string
): string => {
  return !!command ? columnA + command + columnB : columnA;
};

const getCurrentCursor = (command: CALC_SIGN): number =>
  command === CALC_SIGN.EMPTY ? 0 : 1;

function App() {
  const columns = useRef<string[]>(["", ""]);
  const command = useRef<CALC_SIGN>(CALC_SIGN.EMPTY);

  const [answer, setAnswer] = useState<string>("0");

  const handleNumberClick = (value: string) => () => {
    const cursor = getCurrentCursor(command.current);
    const currentColumnValue = columns.current[cursor];

    const nextValue = currentColumnValue + value;

    columns.current[cursor] = nextValue;

    const result = showExpression(
      columns.current[0],
      columns.current[1],
      command.current
    );

    setAnswer(() => result);
  };

  const handleClearCalc = () => {
    command.current = CALC_SIGN.EMPTY;
    columns.current = ["", ""];
    setAnswer("0");
  };

  const handleCalcAns = (currentCommand: CALC_SIGN) => () => {
    const result = calcResult(
      columns.current[0],
      columns.current[1],
      command.current
    );

    command.current = currentCommand;
    columns.current = [result, ""];
    setAnswer(() => result + command.current);
  };

  const handleDeleteCalc = () => {
    const cursor = getCurrentCursor(command.current);
    const currentColumnValue = columns.current[cursor];
    const nextColumnValue = currentColumnValue.substring(
      0,
      currentColumnValue.length - 1
    );
    columns.current[cursor] = nextColumnValue;

    const result = showExpression(
      columns.current[0],
      columns.current[1],
      command.current
    );

    setAnswer(() => result);
  };

  return (
    <div className="App">
      <header className="result">{answer}</header>
      <div className="inputContainer">
        <div className="leftSide">
          <button className="button row-container" onClick={handleClearCalc}>
            C
          </button>
          <button className="button row-container" onClick={handleDeleteCalc}>
            DEL
          </button>
          <button
            className="button row-container"
            onClick={handleCalcAns(CALC_SIGN.DIVIDED)}
          >
            {CALC_SIGN.DIVIDED}
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
            onClick={handleCalcAns(CALC_SIGN.MULTIPLY)}
          >
            {CALC_SIGN.MULTIPLY}
          </button>
          <button
            className="button col-container"
            onClick={handleCalcAns(CALC_SIGN.SUBTRACT)}
          >
            {CALC_SIGN.SUBTRACT}
          </button>
          <button
            className="button col-container"
            onClick={handleCalcAns(CALC_SIGN.ADD)}
          >
            {CALC_SIGN.ADD}
          </button>
          <button
            className="button col-container two-col"
            onClick={handleCalcAns(CALC_SIGN.EMPTY)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
