import clsx from "clsx";
import camelCase from "lodash.camelcase";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import getInputNumber from "scripts/getInputNumber";

const InputNumber = ({ name, value, icon, update }) => {
  const dispatch = useDispatch();
  const id = camelCase(name);

  const keyDownHandler = useCallback((event) => {
    const key = event.key;
    if (key === "e" || key === "-" || key === "+") {
      event.preventDefault();
    }
  }, []);

  const onChangeHandler = (event) => {
    const inputNumber = getInputNumber(event);
    dispatch(update({ value: inputNumber }));
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-cyan-dark-2" htmlFor={id}>
        {name}
      </label>
      <div className="relative bg-cyan-light-1 rounded p-3">
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
          onKeyDown={keyDownHandler}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default InputNumber;
