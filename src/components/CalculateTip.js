import React, { useEffect } from "react";
import "../styles/CalculateTip.scss";
import iconPerson from "../images/icon-person.svg";
import Bill from "features/bill/Bill";
import getInputNumber from "scripts/getInputNumber";

let tipSelectors;

const CalculateTip = (props) => {
  useEffect(() => {
    tipSelectors = document.querySelectorAll(".tips__tip");
  }, []);

  const tips = [5, 10, 15, 25, 50];

  const showError = (value, parentClassName) => {
    let errorParent = document.querySelector(parentClassName);
    if (value === 0) {
      errorParent.classList.add("show-error");
      return;
    } else {
      errorParent.classList.remove("show-error");
    }
  };

  const removeActiveClass = () => {
    tipSelectors.forEach((t) => {
      if (t.classList.contains("active")) {
        t.classList.remove("active");
        return;
      }
    });
  };

  return (
    <div className="calculateTip">
      <Bill />
      <div className="tips">
        <label className="tips__label">Select Tip %</label>
        <div className="tips--container">
          {tips.map((tip) => {
            return (
              <span
                key={tip}
                className="tips__tip"
                onClick={(e) => {
                  removeActiveClass();
                  e.target.classList.add("active");
                  props.updateTip(tip);
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
              removeActiveClass();
              e.target.classList.add("active");
              props.updateTip(getInputNumber(e));
            }}
            onChange={(e) => {
              props.updateTip(getInputNumber(e));
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
            value={props.numberOfPeople === 0 ? "" : props.numberOfPeople}
            onChange={(e) => {
              let value = getInputNumber(e);
              showError(value, ".numberOfPeople");
              props.updateNumberOfPeople(value);
            }}
          />
          <img src={iconPerson} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export { CalculateTip, tipSelectors };
