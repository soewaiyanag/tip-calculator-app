import clsx from "clsx";
import camelCase from "lodash.camelcase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getInputNumber from "scripts/getInputNumber";
import onlyInt from "scripts/onlyInt";
import ZeroErrorMessage from "./ZeroErrorMessage";

const InputNumber = ({ name, value, icon, update }) => {
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  const id = camelCase(name);
  const isEqualZero = value === 0;

  const onChangeHandler = (event) => {
    const inputNumber = getInputNumber(event);
    dispatch(update({ value: inputNumber }));
  };

  return (
    <div className="space-y-2">
      <div className="text-xs font-semibold flex justify-between">
        <label className="text-cyan-dark-2" htmlFor={id}>
          {name}
        </label>
        <ZeroErrorMessage isEqualZero={isEqualZero} />
      </div>
      <div
        className={clsx(
          "relative bg-cyan-light-1 rounded p-3",
          "outline transition-all duration-100",
          isFocus || isEqualZero ? "outline-2" : "outline-0", // still show red outline even focus is out when the value is 0
          isEqualZero ? "outline-red-500" : "outline-cyan"
        )}
      >
        <img className="w-2.5" src={icon} alt="icon" />
        <input
          className={clsx(
            "absolute inset-0 bg-transparent text-right px-2",
            "placeholder:font-bold outline-none",
            "font-bold text-xl text-cyan-dark-3"
          )}
          placeholder="0"
          type="number"
          name={name}
          id={id}
          value={value || ""} // if value is 0, just show placeholder
          onKeyDown={onlyInt}
          onChange={onChangeHandler}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
        />
      </div>
    </div>
  );
};

export default InputNumber;
