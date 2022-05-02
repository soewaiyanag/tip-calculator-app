import dollarIcon from "images/icon-dollar.svg";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./billSlice";

const Bill = () => {
  const value = useSelector((state) => state.bill.value);
  const dispatch = useDispatch();

  return (
    <div className="bill">
      <div className="row">
        <label htmlFor="bill" className="bill__label">
          Bill
        </label>
        <span className="error">Can't be zero</span>
      </div>
      <div className="bill__input">
        <input
          id="bill"
          className="error"
          placeholder="0"
          type="number"
          value={value === 0 ? "" : value}
          onChange={(e) => {
            let value = parseInt(e.target.value);
            dispatch(update({ value: Number(value) }));
          }}
        />
        <img src={dollarIcon} alt="icon" />
      </div>
    </div>
  );
};

export default Bill;
