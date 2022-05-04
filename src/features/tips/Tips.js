import { update } from "./tipsSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomTip from "./CustomTip";
import getInputNumber from "scripts/getInputNumber";
import clsx from "clsx";

const tips = [5, 10, 15, 25, 50];

const Tips = () => {
  const dispatch = useDispatch();
  const tipValue = useSelector((state) => state.tips.value);

  return (
    <div className="space-y-2">
      <h1 className="text-sm font-semibold text-cyan-dark-2">Select Tip %</h1>
      <div
        className="grid grid-cols-3 gap-3"
        onChange={(event) => {
          const selectedTip = getInputNumber(event);
          dispatch(update({ value: selectedTip }));
        }}
      >
        {tips.map((tip) => {
          const id = `tip-${tip}`;
          return (
            <label
              key={id}
              htmlFor={id}
              className={clsx(
                "font-semibold transition-colors duration-100",
                "rounded cursor-pointer select-none h-8",
                "grid place-items-center",
                tipValue === tip
                  ? "bg-cyan text-cyan-dark-3"
                  : "bg-cyan-dark-3 text-cyan-light-1"
              )}
            >
              {tip}%
              <input
                value={tip}
                className="hidden"
                type="radio"
                name="tip-percent"
                id={id}
              />
            </label>
          );
        })}
        <CustomTip />
      </div>
    </div>
  );
};

export default Tips;
