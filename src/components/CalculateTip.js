import React from "react";
import "styles/CalculateTip.scss";
import Bill from "features/bill/Bill";
import Tips from "features/tips/Tips";

const CalculateTip = () => {
  return (
    <div className="calculateTip">
      <Bill />
      <Tips />

      <div className="numberOfPeople">
        <div className="row">
          <label htmlFor="numberOfPeople" className="numberOfPeople__label">
            Number of People
          </label>
          <span className="error">Can't be zero</span>
        </div>
        <div className="numberOfPeople__input"></div>
      </div>
    </div>
  );
};

export { CalculateTip };
