import { update } from "./tipPercentSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomTipPercent from "./CustomTipPercent";
import getInputNumber from "scripts/getInputNumber";
import clsx from "clsx";

const tipPercents = [5, 10, 15, 25, 50];

const TipPercent = () => {
  const dispatch = useDispatch();
  const tipPercentValue = useSelector((state) => state.tipPercent.value);

  return (
    <div className="space-y-2">
      <h1 className="text-sm font-semibold text-cyan-dark-2">Select Tip %</h1>
      <div
        className="grid grid-cols-2 gap-3 xs:grid-cols-3"
        onChange={(event) => {
          const selectedTip = getInputNumber(event);
          dispatch(update({ value: selectedTip }));
        }}
      >
        {tipPercents.map((tipPercent) => {
          const id = `tip-${tipPercent}`;
          return (
            <label
              key={id}
              htmlFor={id}
              className={clsx(
                "font-semibold transition-colors duration-100",
                "rounded cursor-pointer select-none h-9",
                "grid place-items-center",
                tipPercentValue === tipPercent
                  ? "bg-cyan text-cyan-dark-3"
                  : "bg-cyan-dark-3 text-cyan-light-1"
              )}
            >
              {tipPercent}%
              <input
                value={tipPercent}
                className="hidden"
                type="radio"
                name="tip-percent"
                id={id}
              />
            </label>
          );
        })}
        <CustomTipPercent />
      </div>
    </div>
  );
};

export default TipPercent;
