import { logDOM } from "@testing-library/react";
import React from "react";
import "../styles/CalculateTip.scss";

class CalculateTip extends React.Component {
  state = {
    tips: [
      { name: 5, value: 5 },
      { name: 10, value: 10 },
      { name: 15, value: 15 },
      { name: 25, value: 25 },
      { name: 50, value: 50 },
      { name: "custom", value: 0 },
    ],
  };

  showRadio = () => {
    setTimeout(() => {
      document.querySelectorAll("[name=tip]").forEach((t) => {
        if (t.checked) {
          t.parentElement.classList.add("active");
        } else {
          t.parentElement.classList.remove("active");
        }
      });
    }, 10);
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
          <h2 className="tips__label">Select Tip %</h2>
          <div className="tips--container">
            {this.state.tips.map((tip) => {
              return (
                <label
                  key={tip.name}
                  className="tips__tip"
                  htmlFor={tip.name}
                  onClick={this.showRadio}
                >
                  {tip.value}%
                  <input
                    type="radio"
                    name="tip"
                    id={tip.name}
                    value={tip.value}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                </label>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default CalculateTip;
