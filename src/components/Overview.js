import React from "react";
import "../styles/Overview.scss";

class Overview extends React.Component {
  render() {
    return (
      <section className="Overview">
        <div>
          <div>
            <h3 className="label">Tip Amount</h3>
            <h1 className="value">${this.props.value}</h1>
          </div>
          <div>
            <h3 className="label">Total</h3>
            <h1 className="value">${this.props.value}</h1>
          </div>
        </div>
        <button className="reset-btn">RESET</button>
      </section>
    );
  }
}

export default Overview;
