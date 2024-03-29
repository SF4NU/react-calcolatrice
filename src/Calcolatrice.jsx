import React, { useEffect, useState } from "react";

function Calcolatrice() {
  const [calculation, setCalculation] = useState("0");
  const [display, setDisplay] = useState();
  const [checkIfParenthesis, setCheckIfParenthesis] = useState(false);
  const [checkDot, setCheckDot] = useState(false);
  const [count, setCount] = useState(0);

  function addToCalculation(number) {
    const check = calculation[calculation.length - 1];
    if (calculation === "0") {
      console.log("hello");
      setCalculation((c) => (c = ""));
      setCalculation((c) => c + number);
      setCount((c) => c + 1);
    } else if (calculation !== "0" && check !== ")") {
      if (count < 12) {
        setCalculation((c) => c + number);
        setCount((c) => c + 1);
      }
    }
  }

  function addDot(dot) {
    const check = calculation[calculation.length - 1];
    const operators = ["+", "-", "*", "/", "(", ".", ")"];
    if (!checkDot && !operators.includes(check)) {
      setCalculation((c) => c + ".");
      setCount((c) => c + 1);
      setCheckDot(true);
    }
  }

  function addOperator(operator) {
    const operators = ["+", "-", "*", "/", "."];
    const check = calculation[calculation.length - 1];
    if (calculation !== "0" && operators.includes(check)) {
      setCalculation(calculation.slice(0, -1) + operator);
      setCheckDot(false);
      setCount((c) => (c = 0));
    } else if (calculation !== "0" && check !== "(") {
      setCalculation((c) => c + operator);
      setCheckDot(false);
      setCount((c) => (c = 0));
    }
  }

  useEffect(() => {
    displayResult();
    console.log(checkIfParenthesis);
    if (calculation.length === 0) {
      setCalculation((c) => (c = "0"));
    }
  });

  function roundToTwoDecimals(num) {
    return Math.floor(num * 100) / 100;
  }

  async function resolveCalculation() {
    try {
      const check = calculation[calculation.length - 1];
      const operators = ["+", "-", "*", "/", "(", "."];
      if (check !== ")" && !operators.includes(check) && checkIfParenthesis) {
        await setCalculation((c) => c + ")");
        setCheckIfParenthesis(false);
        setCheckDot(true);
        console.log("trueeeeeeeeeeee");
      }
      const calculate = () => {
        let result = parseFloat(eval(calculation));
        result = roundToTwoDecimals(result);
        setCalculation((c) => (c = String(result)));
        setDisplay((d) => (d = ""));
        setCheckDot(true);
        setCount((c) => (c = 0));
      };
      await calculate();
    } catch (error) {
      console.log(error);
    }
  }

  function addParenthesis() {
    const checkIfZero = parseFloat(calculation.charAt(0));
    const check = calculation[calculation.length - 1];
    const operators = ["+", "-", "*", "/", "(", "."];
    if (!checkIfParenthesis) {
      if (calculation === "0") {
        setCalculation("");
      }
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      if (numbers.includes(check) && checkIfZero && check !== ".") {
        setCheckIfParenthesis(true);
        setCount((c) => (c = 0));
        setCalculation((c) => c + "*(");
      } else if (check !== "(" && check !== ".") {
        setCheckIfParenthesis(true);

        if (check === ")") {
          setCalculation((c) => c + "*(");
        } else {
          setCalculation((c) => c + "(");
        }
      }
    } else if (!operators.includes(check) && check !== ".") {
      setCalculation((c) => c + ")");
      setCheckIfParenthesis(false);
      setCount((c) => (c = 0));
    }
  }

  function clearCalculation() {
    setCalculation((c) => (c = "0"));
    setDisplay((d) => (d = ""));
    setCheckIfParenthesis(false);
    setCheckDot(false);
    setCount((c) => (c = 0));
  }

  function checkParenthesis() {
    const checkIf = calculation[calculation.length - 1];
    const parenthesis = ["*(", "(", ")"];
    if (parenthesis.includes(checkIf)) {
      if (!checkIfParenthesis) {
        setCheckIfParenthesis(true);
      } else {
        setCheckIfParenthesis(false);
      }
    }
  }

  function removeOne() {
    if (calculation.length > 0 && calculation !== "0") {
      setCalculation(calculation.slice(0, -1));
      checkParenthesis();
      setCheckDot(false);
      if (count > 0) {
        setCount((c) => c - 1);
      }
    }
  }

  function displayResult() {
    try {
      if (
        calculation[calculation.length - 1] === "(" &&
        calculation[calculation.length - 1] === "*("
      ) {
      } else {
        let result = parseFloat(eval(calculation));
        result = roundToTwoDecimals(result);
        setDisplay((d) => (d = result));
      }
    } catch (error) {
      // console.log(error);
    }
  }

  function changeColors(colors) {
    if (colors === "black-white") {
      document.querySelector(".tasti").style.backgroundColor = "#2F3031";
      document.querySelector(".tasti").style.color = "#D3F3EE";
    } else if ((colors === "default")) {
      document.querySelector(".tasti").style.backgroundColor = "#005c69";
      document.querySelector(".tasti").style.color = "#D3F3EE";
    } else if (colors === "indigo-blue") {
      document.querySelector(".tasti").style.backgroundColor = "#460fc7";
      document.querySelector(".tasti").style.color = "white";
    }
  }

  return (
    <>
      <section>
        <div className="tasti">
          <div className="display-result">
            <span id="real-time-result">{display}</span>
          </div>
          <div className="risultato-div">
            <span className="risultato">
              {calculation}
              <div className="flashing-cursor"></div>
            </span>
          </div>
          <div className="tasti-div">
            <div className="tasto" onClick={clearCalculation}>
              C
            </div>
            <div className="tasto" onClick={() => addParenthesis()}>
              ( )
            </div>
            <div className="tasto" onClick={removeOne}>
              <span className="material-symbols-outlined">backspace</span>
            </div>
            <div className="tasto" onClick={() => addOperator("/")}>
              ÷
            </div>
          </div>
          <div className="tasti-div">
            <div className="tasto" onClick={() => addToCalculation("7")}>
              7
            </div>
            <div className="tasto" onClick={() => addToCalculation("8")}>
              8
            </div>
            <div className="tasto" onClick={() => addToCalculation("9")}>
              9
            </div>
            <div className="tasto" onClick={() => addOperator("*")}>
              ×
            </div>
          </div>
          <div className="tasti-div">
            <div className="tasto" onClick={() => addToCalculation("4")}>
              4
            </div>
            <div className="tasto" onClick={() => addToCalculation("5")}>
              5
            </div>
            <div className="tasto" onClick={() => addToCalculation("6")}>
              6
            </div>
            <div className="tasto" onClick={() => addOperator("-")}>
              -
            </div>
          </div>
          <div className="tasti-div">
            <div className="tasto" onClick={() => addToCalculation("1")}>
              1
            </div>
            <div className="tasto" onClick={() => addToCalculation("2")}>
              2
            </div>
            <div className="tasto" onClick={() => addToCalculation("3")}>
              3
            </div>
            <div className="tasto" onClick={() => addOperator("+")}>
              +
            </div>
          </div>
          <div className="tasti-div">
            <div
              className="tasto tasto-zero"
              onClick={() => addToCalculation("0")}>
              0
            </div>
            <div className="tasto" onClick={() => addDot(".")}>
              ,
            </div>
            <div className="tasto" onClick={resolveCalculation}>
              =
            </div>
          </div>
          <div className="change-colors">
            <div
              className="colors black-white"
              onClick={() => changeColors("black-white")}></div>
            <div
              className="colors default"
              onClick={() => changeColors("default")}></div>
            <div
              className="colors indigo-blue"
              onClick={() => changeColors("indigo-blue")}></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calcolatrice;
