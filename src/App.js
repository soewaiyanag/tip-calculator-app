"use stript";

import React, { useState } from "react";
import "./styles/App.scss";
import { CalculateTip, tipSelectors } from "./components/CalculateTip";
import Overview from "./components/Overview";

const App = () => {
  const [bill, setBill] = useState(0);
  const [tipValue, setTipValue] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const reset = () => {
    setBill(0);
    setTipValue(0);
    setNumberOfPeople(0);
    tipSelectors.forEach((t) => {
      if (t.classList.contains("active")) {
        t.classList.remove("active");
        return;
      }
    });
  };

  const tipAmount = () => {
    let _bill = Number(bill);
    let _tipValue = Number(tipValue);
    let _numberOfPeople = Number(numberOfPeople);

    let value = (_bill * (_tipValue / 100)) / _numberOfPeople;
    value = isNaN(value) || !isFinite(value) ? 0 : value;
    return value.toFixed(2);
  };

  const total = () => {
    let _bill = Number(bill);
    let _tipValue = Number(tipValue);
    let _numberOfPeople = Number(numberOfPeople);

    let value = (_bill * (_tipValue / 100 + 1)) / _numberOfPeople;
    value = isNaN(value) || !isFinite(value) ? 0 : value;
    return value.toFixed(2);
  };

  return (
    <div className="App">
      <h2 className="App__header">
        spli
        <br />
        tter
      </h2>
      <div className="App__card">
        <CalculateTip
          bill={bill}
          tipValue={tipValue}
          numberOfPeople={numberOfPeople}
          updateTip={setTipValue}
          updateBill={setBill}
          updateNumberOfPeople={setNumberOfPeople}
        />
        <Overview reset={reset} tipAmount={tipAmount} total={total} />
      </div>
    </div>
  );
};

export default App;
