import clsx from "clsx";
import { update } from "features/bill/billSlice";
import camelCase from "lodash.camelcase";
import { useDispatch } from "react-redux";

const InputNumber = ({ name, value, onChange, icon, action }) => {
  const dispatch = useDispatch();
  const id = camelCase(name);

  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <div className="relative bg-cyan-light-1 rounded py-2 px-2">
        <img className="w-2.5" src={icon} alt="icon" />
        <input
          className="absolute inset-0 bg-transparent"
          type="number"
          name={name}
          id={id}
          value={value}
          onChange={(e) => {
            dispatch(action(e.target.value));
          }}
        ></input>
      </div>
    </div>
  );
};

export default InputNumber;
