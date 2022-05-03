import Bill from "features/bill/Bill";
import NumberOfPeople from "features/numberOfPeople/NumberOfPeople";
import Tips from "features/tips/Tips";

const CalculateTip = () => {
  return (
    <div className="">
      <Bill />
      <Tips />
      <NumberOfPeople />
    </div>
  );
};

export default CalculateTip;
