import clsx from "clsx";
import camelCase from "lodash.camelcase";

const InputNumber = ({ name, value, onChange, className, icon }) => {
  const id = camelCase(name);
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <div className="relative">
        <img className="relative z-10" src={icon} alt="icon" />
        <input
          className="absolute inset-0"
          type="number"
          name={name}
          id={id}
        ></input>
      </div>
    </div>
  );
};

export default InputNumber;
