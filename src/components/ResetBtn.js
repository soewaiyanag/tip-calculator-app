import clsx from "clsx";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { CustomTipContext } from "contexts/CustomTipContext";
import { update as updateTipPercent } from "features/tipPercent/tipPercentSlice";
import { update as updateNumberOfPeople } from "features/numberOfPeople/numberOfPeopleSlice";
import { update as updateBill } from "features/bill/billSlice";

const ResetBtn = () => {
  const dispatch = useDispatch();
  const { setCustomValue } = useContext(CustomTipContext);

  const resetAll = () => {
    dispatch(updateTipPercent({ value: "" }));
    dispatch(updateNumberOfPeople({ value: "" }));
    dispatch(updateBill({ value: "" }));
    setCustomValue("");
  };

  return (
    <button
      onClick={resetAll}
      className={clsx(
        "w-full transition-colors bg-cyan",
        "font-semibold text-cyan-dark-3 rounded",
        "px-2 py-1.5 mt-auto hover:bg-cyan-light-2"
      )}
    >
      RESET
    </button>
  );
};

export default ResetBtn;
