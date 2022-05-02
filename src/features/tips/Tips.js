import { useRef } from "react";
import { update } from "./tipsSlice";
import { useDispatch } from "react-redux";
import CustomTip from "./CustomTip";
import removeActiveClass from "scripts/removeActiveClass";

const tips = [5, 10, 15, 25, 50];

const Tips = () => {
  const tipContainerRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <div className="tips">
      <label className="tips__label">Select Tip %</label>
      <div ref={tipContainerRef} className="tips--container">
        {tips.map((tip) => {
          return (
            <span
              key={tip}
              className="tips__tip"
              onClick={(e) => {
                dispatch(update({ value: tip }));
                removeActiveClass(tipContainerRef);
                e.target.classList.add("active");
              }}
            >
              {tip}%
            </span>
          );
        })}
        <CustomTip tipContainerRef={tipContainerRef} />
      </div>
    </div>
  );
};

export default Tips;
