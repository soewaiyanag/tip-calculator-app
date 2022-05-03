import clsx from "clsx";
import AppTitle from "components/AppTitle";
import Attribution from "components/Attribution";
import Card from "components/Card";
import React, { useState } from "react";

// const tipAmount = () => {
//   let _bill = Number(bill);
//   let _tipValue = Number(tipValue);
//   let _numberOfPeople = Number(numberOfPeople);

//   let value = (_bill * (_tipValue / 100)) / _numberOfPeople;
//   value = isNaN(value) || !isFinite(value) ? 0 : value;
//   return value.toFixed(2);
// };

// const total = () => {
//   let _bill = Number(bill);
//   let _tipValue = Number(tipValue);
//   let _numberOfPeople = Number(numberOfPeople);

//   let value = (_bill * (_tipValue / 100 + 1)) / _numberOfPeople;
//   value = isNaN(value) || !isFinite(value) ? 0 : value;
//   return value.toFixed(2);
// };

const App = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className={clsx("space-y-14 px-4", "w-full max-w-2xl")}>
        <AppTitle />
        <Card />
        <Attribution
          name={"Soe Wai Yan Aung"}
          githubProfileLink={"https://github.com/soewaiyanag"}
        />
      </div>
    </div>
  );
};

export default App;
