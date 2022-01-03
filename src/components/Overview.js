import React from "react";
import "../styles/Overview.scss";

class Overview extends React.Component {
  render() {
    return (
      <section className="Overview">
        <div>
          <div className="row">
            <h3 className="label">Tip Amount</h3>
            <h1 className="value">${this.props.tipAmount()}</h1>
          </div>
          <div className="row">
            <h3 className="label">Total</h3>
            <h1 className="value">${this.props.total()}</h1>
          </div>
        </div>
        <button id="reset" onClick={this.props.reset}>
          RESET
        </button>
      </section>
    );
  }
}

export default Overview;
