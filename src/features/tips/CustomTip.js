import removeActiveClass from "scripts/removeActiveClass";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "./tipsSlice";

const CustomTip = ({ tipContainerRef }) => {
  const [customValue, setCustomValue] = useState(0);
  const dispatch = useDispatch();

  const customTipOnchangeHandler = (e) => {
    const getCustomValue = parseInt(e.target.value);
    setCustomValue(getCustomValue);
    dispatch(update({ value: customValue }));
    removeActiveClass(tipContainerRef);
  };

  return (
    <input
      className=""
      type="number"
      min={0}
      max={100}
      onChange={customTipOnchangeHandler}
    />
  );
};

export default CustomTip;
