import clsx from "clsx";
import CalculateTip from "./CalculateTip";
import Overview from "./Overview";

const Card = () => {
  return (
    <div
      className={clsx(
        "grid gap-6 p-6 mx-auto",
        "bg-white rounded-lg shadow-lg min-h-[24rem]",
        "sm:grid-cols-2 sm:min-w-full"
      )}
    >
      <CalculateTip />
      <Overview />
    </div>
  );
};

export default Card;
