import React from "react";
import "./styles/App.scss";
import { CalculateTip, tipSelectors } from "./components/CalculateTip";
import Overview from "./components/Overview";

class App extends React.Component {
  state = {
    bill: 0,
    tipValue: 0,
    numberOfPeople: 0,
  };

  updateTip = (value) => {
    this.setState({
      tipValue: value,
    });
  };

  updateBill = (value) => {
    this.setState({
      bill: value,
    });
  };

  updateNumberOfPeople = (value) => {
    this.setState({
      numberOfPeople: value,
    });
  };

  reset = () => {
    this.setState({
      bill: 0,
      tipValue: 0,
      numberOfPeople: 0,
    });

    tipSelectors.forEach((t) => {
      if (t.classList.contains("active")) {
        t.classList.remove("active");
        return;
      }
    });
  };

  tipAmount = () => {
    let bill = Number(this.state.bill);
    let tipValue = Number(this.state.tipValue);
    let numberOfPeople = Number(this.state.numberOfPeople);

    let value = (bill * (tipValue / 100)) / numberOfPeople;
    value = isNaN(value) || !isFinite(value) ? 0 : value;
    return value.toFixed(2);
  };

  total = () => {
    let bill = Number(this.state.bill);
    let tipValue = Number(this.state.tipValue);
    let numberOfPeople = Number(this.state.numberOfPeople);

    let value = (bill * (tipValue / 100 + 1)) / numberOfPeople;
    value = isNaN(value) || !isFinite(value) ? 0 : value;
    return value.toFixed(2);
  };

  render() {
    return (
      <div className="App">
        <h2 className="App__header">
          spli
          <br />
          tter
        </h2>
        <div className="App__card">
          <CalculateTip
            data={this.state}
            updateTip={this.updateTip}
            updateBill={this.updateBill}
            updateNumberOfPeople={this.updateNumberOfPeople}
          />
          <Overview
            reset={this.reset}
            tipAmount={this.tipAmount}
            total={this.total}
          />
        </div>
      </div>
    );
  }
}

export default App;
