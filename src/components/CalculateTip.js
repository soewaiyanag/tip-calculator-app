import React from "react";
import "../styles/CalculateTip.scss";
import iconPerson from "../images/icon-person.svg";
import iconDollar from "../images/icon-dollar.svg";

let tips;
class CalculateTip extends React.Component {
  componentDidMount() {
    tips = document.querySelectorAll(".tips__tip");
  }

  getCustomTip(e) {
    let value = Number(e.target.value === "" ? 0 : e.target.value);
    return value;
  }

  removeActiveClass() {
    tips.forEach((t) => {
      if (t.classList.contains("active")) {
        t.classList.remove("active");
        return;
      }
    });
  }

  tips = [5, 10, 15, 25, 50];

  state = {
    tipValue: 0,
  };

  render() {
    return (
      <section className="calculateTip">
        <div className="bill">
          <label htmlFor="bill" className="bill__label">
            Bill
          </label>
          <div className="bill__input">
            <input id="bill" placeholder="0" type="number" />
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

                    this.setState({
                      tipValue: tip,
                    });
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

                this.setState({ tipValue: this.getCustomTip(e) });
              }}
              onChange={(e) => {
                this.setState({ tipValue: this.getCustomTip(e) });
              }}
            />
          </div>
        </div>
        <div className="numberOfPeople">
          <label htmlFor="numberOfPeople" className="numberOfPeople__label">
            Number of People
          </label>
          <div className="numberOfPeople__input">
            <input id="numberOfPeople" placeholder="0" type="number" />
            <img src={iconPerson} alt="icon" />
          </div>
        </div>
      </section>
    );
  }
}

export default CalculateTip;
