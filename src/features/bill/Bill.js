import dollarIcon from "images/icon-dollar.svg";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./billSlice";
import getInputNumber from "scripts/getInputNumber";

const Bill = () => {
  const billValue = useSelector((state) => state.bill.value);
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
          value={billValue === 0 ? "" : billValue}
          onChange={(e) => {
            let value = getInputNumber(e);
            // showError(value, ".bill");
            dispatch(change({ value: Number(value) }));
          }}
        />
        <img src={dollarIcon} alt="icon" />
      </div>
    </div>
  );
};

export default Bill;
