import React, { useEffect, useState } from "react";

function Calcolatrice() {
  const [calculation, setCalculation] = useState("0");
  const [display, setDisplay] = useState();
  const [checkIfParenthesis, setCheckIfParenthesis] = useState(false);

  function addToCalculation(number) {
    if (calculation === "0") {
      console.log("hello");
      setCalculation((c) => (c = ""));
      setCalculation((c) => c + number);
    } else if (calculation !== "0") {
      setCalculation((c) => c + number);
    }
  }

  function addOperator(operator) {
    const operators = ["+", "-", "*", "/"];
    const check = calculation[calculation.length - 1];
    if (calculation !== "0" && operators.includes(check)) {
      setCalculation(calculation.slice(0, -1) + operator);
    } else if (calculation !== "0" && check !== "(") {
      setCalculation((c) => c + operator);
    }
  }

  useEffect(() => {
    displayResult();
    console.log(display);
    if (calculation.length === 0) {
      setCalculation((c) => (c = "0"));
    }
  });

  function resolveCalculation() {
    try {
      let result = parseFloat(eval(calculation).toFixed(2));
      setCalculation((c) => (c = result));
      setDisplay((d) => (d = ""));
    } catch (error) {
      console.log(error);
    }
  }

  function addParenthesis() {
    const checkIfZero = parseFloat(calculation.charAt(0))
    if (!checkIfParenthesis) {
      setCheckIfParenthesis(true);
        if (calculation === "0") {
            setCalculation("");
        }
        const check = calculation[calculation.length - 1];
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","("];
        if (numbers.includes(check) && checkIfZero) {
            setCalculation((c) => c + "*(");
        } else {
            setCalculation((c) => c + "(");
        }
    } else {
        setCalculation((c) => c + ")");
        setCheckIfParenthesis(false);
    }
}

  function clearCalculation() {
    setCalculation((c) => (c = "0"));
    setDisplay((d) => (d = ""));
  }

  function removeOne() {
    const checkIf = calculation[calculation.length - 1]
    const parenthesis = ["*(", "(", ")"];
    if (calculation.length > 0 && calculation !== "0") {
      setCalculation(calculation.slice(0, -1));
      if (parenthesis.includes(checkIf)) {
        if (!checkIfParenthesis) {
          setCheckIfParenthesis(true);
        } else {
          setCheckIfParenthesis(false);
        }
      }
    }
  }

  function displayResult() {
    try {
        if (calculation[calculation.length - 1] === "(" && calculation[calculation.length - 1] === "*(") {
          console.log("error");
        }
        else {
          let result = parseFloat(eval(calculation).toFixed(2));
      setDisplay((d) => (d = result));
        }
    } catch (error) {
      console.log(error);
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
            <span className="risultato">{calculation}<div class="flashing-cursor"></div>
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
            <div className="tasto" onClick={() => addToCalculation(".")}>
              ,
            </div>
            <div className="tasto" onClick={resolveCalculation}>
              =
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calcolatrice;
