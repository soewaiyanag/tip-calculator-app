import React from "react";
import "../styles/Overview.scss";

class Overview extends React.Component {
  render() {
    const tip = Number(this.props.tipAmount());
    const total = Number(this.props.total());
    return (
      <section className="Overview">
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
          onClick={tip + total ? this.props.reset : null}
        >
          RESET
        </button>
      </section>
    );
  }
}

export default Overview;
