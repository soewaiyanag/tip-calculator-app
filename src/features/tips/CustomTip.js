import clsx from "clsx";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import getInputNumber from "scripts/getInputNumber";
import onlyInt from "scripts/onlyInt";
import { update } from "./tipsSlice";

const CustomTip = () => {
  const [customValue, setCustomValue] = useState("");
  const dispatch = useDispatch();
  const radioRef = useRef(null);

  const onChangeHandler = (event) => {
    const value = getInputNumber(event);
    setCustomValue(value);
    dispatch(update({ value: customValue }));
  };

  return (
    <div className="relative">
      <input
        className={clsx(
          "placeholder:font-semibold placeholder:text-cyan-dark-2",
          "absolute inset-0 text-center font-semibold",
          "duration-100 transition-all",
          "bg-cyan-light-1 outline rounded",
          radioRef.current?.checked ? "outline-2" : "outline-0",
          customValue !== 0 ? "outline-cyan" : "outline-red-500"
        )}
        placeholder="Custom"
        type="number"
        value={customValue || ""}
        onKeyDown={onlyInt}
        onChange={onChangeHandler}
        onClick={() => {
          radioRef.current.click();
        }}
      />
      <input
        value={customValue}
        ref={radioRef}
        className="hidden"
        type="radio"
        name="tip-percent"
        id="custom-tip"
      />
    </div>
  );
};

export default CustomTip;
