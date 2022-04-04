import React from "react";
import "../styles/Overview.scss";

const Overview = (props) => {
  const tip = Number(props.tipAmount());
  const total = Number(props.total());
  return (
    <div className="Overview">
      <div>
        <div className="row">
          <h3 className="label">Tip Amount</h3>
          <h1 className="value">${tip}</h1>
        </div>
        <div className="row">
          <h3 className="label">Total</h3>
          <h1 className="value">${total}</h1>
        </div>
      </div>
      <button
        className={tip + total ? null : "disable"}
        id="reset"
        onClick={tip + total ? props.reset : null}
      >
        RESET
      </button>
    </div>
  );
};

export default Overview;
