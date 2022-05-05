import clsx from "clsx";

const ZeroErrorMessage = ({ isEqualZero }) => (
  <span
    className={clsx(
      "text-red-500 transition-opacity duration-100",
      isEqualZero ? "opacity-100" : "opacity-0"
    )}
  >
    Can't be zero
  </span>
);

export default ZeroErrorMessage;
