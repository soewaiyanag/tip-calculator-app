import React, { useState } from "react";
import { CalculateTip } from "./components/CalculateTip";
import Overview from "./components/Overview";

const App = () => {
  const [bill, setBill] = useState(0);
  const [tipValue, setTipValue] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const reset = () => {
    setBill(0);
    setTipValue(0);
    setNumberOfPeople(0);
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
    <div className="mx-4">
      <h1 className="text-center font-semibold text-2xl uppercase tracking-widest">
        spli
        <br />
        tter
      </h1>
      <div
        className="grid grid-cols-2 gap-4 mx-auto p-6 max-w-3xl
                bg-white rounded-lg shadow-lg h-80"
      >
        <CalculateTip />
        <Overview />
      </div>
    </div>
  );
};

export default App;
