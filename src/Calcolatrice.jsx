import React, { useState } from "react";

function Calcolatrice() {
  const [calculation, setCalculation] = useState("0");
  const [symbol, setSymbol] = useState("");
  const [saveFirstNumber, setSaveFirstNumber] = useState();
  const [saveSecondNumber, setSaveSecondNumber] = useState();

  function addToCalculation(number) {
    if (calculation === "0") {
      console.log("hello");
      setCalculation((c) => (c = ""));
      setCalculation((c) => c + number);
    } else if (calculation !== "0") {
      setCalculation((c) => c + number);
    }
  }

  function calculateTotal(equation) {
    if (symbol === "") {
      setSymbol((s) => (s = equation));
    }
    if (!saveFirstNumber) {
      setSaveFirstNumber((fn) => (fn = calculation));
      setCalculation((c) => (c = "0"));
    } else if (!saveSecondNumber) {
      setSaveSecondNumber((sn) => (sn = calculation));
    }
  }

  return (
    <>
      <section>
        <div className="tasti">
          <div className="risultato-div">
            <span className="risultato">{calculation}</span>
          </div>
          <div className="tasti-div">
            <div className="tasto" onClick={addToCalculation}>
              C
            </div>
            <div className="tasto" onClick={addToCalculation}>
              <span class="material-symbols-outlined">backspace</span>
            </div>
            <div className="tasto" onClick={addToCalculation}>
              %
            </div>
            <div className="tasto" onClick={addToCalculation}>
              /
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
            <div className="tasto" onClick={addToCalculation}>
              x
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
            <div className="tasto" onClick={addToCalculation}>
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
            <div className="tasto" onClick={() => calculateTotal("+")}>
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
            <div className="tasto" onClick={addToCalculation}>
              =
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calcolatrice;
