import React from "react";
import "./styles/App.scss";
import CalculateTip from "./components/CalculateTip";
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
            updateTip={this.updateTip}
            updateBill={this.updateBill}
            updateNumberOfPeople={this.updateNumberOfPeople}
          />
          <Overview value={1} />
        </div>
      </div>
    );
  }
}

export default App;
