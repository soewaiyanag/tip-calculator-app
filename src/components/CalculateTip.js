import { logDOM } from "@testing-library/react";
import React from "react";
import "../styles/CalculateTip.scss";

let tips;
class CalculateTip extends React.Component {
  componentDidMount() {
    tips = document.querySelectorAll(".tips__tip");
  }

  getCustomTip(e) {
    return e.target.value === "" ? 0 : e.target.value;
  }

  removeActiveClass() {
    tips.forEach((t) => {
      t.classList.remove("active");
    });
  }

  state = {
    tips: [
      { value: 5 },
      { value: 10 },
      { value: 15 },
      { value: 25 },
      { value: 50 },
    ],
    tipValue: 0,
  };

  render() {
    return (
      <section>
        <div className="bill">
          <label htmlFor="bill" className="bill__label">
            Bill
          </label>
          <div className="bill__input">
            <input id="bill" placeholder="0" type="number" />
            <span>$</span>
          </div>
        </div>
        <div className="tips">
          {/* <h2 className="tips__header">Select Tip %</h2> */}
          <h2 className="tips__header">{this.state.tipValue}</h2>
          <div className="tips--container">
            {this.state.tips.map((tip) => {
              return (
                <span
                  key={tip.value}
                  className="tips__tip"
                  onClick={(e) => {
                    this.removeActiveClass();
                    e.target.classList.add("active");

                    this.setState({
                      tipValue: tip.value,
                    });
                  }}
                >
                  {tip.value}%
                </span>
              );
            })}

            <input
              className="tips__tip custom"
              type="number"
              name="custom"
              id="custom"
              placeholder="Custom"
              onClick={(e) => {
                this.removeActiveClass();
                e.target.classList.add("active");

                this.setState({ tipValue: this.getCustomTip(e) });
              }}
              onChange={(e) => {
                this.setState({ tipValue: this.getCustomTip(e) });
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default CalculateTip;
