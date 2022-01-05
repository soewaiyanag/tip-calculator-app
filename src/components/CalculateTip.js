import React from "react";
import "../styles/CalculateTip.scss";
import iconPerson from "../images/icon-person.svg";
import iconDollar from "../images/icon-dollar.svg";

let tipSelectors;
class CalculateTip extends React.Component {
  tips = [5, 10, 15, 25, 50];

  componentDidMount() {
    tipSelectors = document.querySelectorAll(".tips__tip");
  }

  getInputNumber(e) {
    return Number(e.target.value);
  }

  showError(value, parentClassName) {
    let errorParent = document.querySelector(parentClassName);
    if (value === 0) {
      errorParent.classList.add("show-error");
      return;
    } else {
      errorParent.classList.remove("show-error");
    }
  }

  removeActiveClass() {
    tipSelectors.forEach((t) => {
      if (t.classList.contains("active")) {
        t.classList.remove("active");
        return;
      }
    });
  }

  render() {
    return (
      <section className="calculateTip">
        <div className="bill">
          <div className="row">
            <label htmlFor="bill" className="bill__label">
              Bill
            </label>
            <span className="error">Can't be zero</span>
          </div>
          <div className="bill__input">
            <input
              id="bill"
              className="error"
              placeholder="0"
              type="number"
              value={this.props.data.bill === 0 ? "" : this.props.data.bill}
              onChange={(e) => {
                let value = this.getInputNumber(e);
                this.showError(value, ".bill");
                this.props.updateBill(value);
              }}
            />
            <img src={iconDollar} alt="icon" />
          </div>
        </div>
        <div className="tips">
          <label className="tips__label">Select Tip %</label>
          <div className="tips--container">
            {this.tips.map((tip) => {
              return (
                <span
                  key={tip}
                  className="tips__tip"
                  onClick={(e) => {
                    this.removeActiveClass();
                    e.target.classList.add("active");
                    this.props.updateTip(tip);
                  }}
                >
                  {tip}%
                </span>
              );
            })}

            <input
              className="tips__tip custom"
              type="number"
              name="custom"
              id="custom"
              placeholder="Custom"
              min="10"
              max="100"
              onClick={(e) => {
                this.removeActiveClass();
                e.target.classList.add("active");
                this.props.updateTip(this.getInputNumber(e));
              }}
              onChange={(e) => {
                this.props.updateTip(this.getInputNumber(e));
              }}
            />
          </div>
        </div>
        <div className="numberOfPeople">
          <div className="row">
            <label htmlFor="numberOfPeople" className="numberOfPeople__label">
              Number of People
            </label>
            <span className="error">Can't be zero</span>
          </div>
          <div className="numberOfPeople__input">
            <input
              id="numberOfPeople"
              className="error"
              placeholder="0"
              type="number"
              value={
                this.props.data.numberOfPeople === 0
                  ? ""
                  : this.props.data.numberOfPeople
              }
              onChange={(e) => {
                let value = this.getInputNumber(e);
                this.showError(value, ".numberOfPeople");
                this.props.updateNumberOfPeople(value);
              }}
            />
            <img src={iconPerson} alt="icon" />
          </div>
        </div>
      </section>
    );
  }
}

export { CalculateTip, tipSelectors };
