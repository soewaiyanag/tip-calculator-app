import clsx from "clsx";

const InputNumber = ({ value, onChange, className, icon }) => {
  return (
    <div className={clsx("input-number", className)}>
      <input
        placeholder="0"
        type="number"
        value={value === 0 ? "" : value}
        onChange={onChange}
      />
      {icon && <img src={icon} alt="icon" />}
    </div>
  );
};

export default InputNumber;
