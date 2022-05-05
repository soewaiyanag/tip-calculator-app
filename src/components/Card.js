import clsx from "clsx";
import CalculateTip from "./CalculateTip";
import Overview from "./Overview";

const Card = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-2 gap-6 p-6 max-w-3xl",
        "bg-white rounded-lg shadow-lg min-h-[20rem]"
      )}
    >
      <CalculateTip />
      <Overview />
    </div>
  );
};

export default Card;
