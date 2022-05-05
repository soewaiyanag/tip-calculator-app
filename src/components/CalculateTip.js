import Bill from "features/bill/Bill";
import NumberOfPeople from "features/numberOfPeople/NumberOfPeople";
import Tips from "features/tipPercent/TipPercent";

const CalculateTip = () => {
  return (
    <div className="flex flex-col justify-between gap-6 p-2">
      <Bill />
      <Tips />
      <NumberOfPeople />
    </div>
  );
};

export default CalculateTip;
