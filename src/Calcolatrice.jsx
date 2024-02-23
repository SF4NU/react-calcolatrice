import React, { useEffect, useState } from "react";

function Calcolatrice() {
  const [calculation, setCalculation] = useState("0");
  const [display, setDisplay] = useState();

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
    if (calculation !== "0") {
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

  function clearCalculation() {
    setCalculation((c) => (c = "0"));
    setDisplay((d) => (d = ""));
  }

  function removeOne() {
    if (calculation.length > 0 && calculation !== "0") {
      setCalculation(calculation.slice(0, -1));
    }
  }

  function displayResult() {
    try {
      let result = parseFloat(eval(calculation).toFixed(2));
      setDisplay((d) => (d = result));
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
            <span className="risultato">{calculation}</span>
          </div>
          <div className="tasti-div">
            <div className="tasto" onClick={clearCalculation}>
              C
            </div>
            <div className="tasto" onClick={() => addOperator("%")}>
              %
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
