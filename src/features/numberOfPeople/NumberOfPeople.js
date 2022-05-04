import InputNumber from "components/InputNumber";
import { useSelector } from "react-redux";
import { update } from "./numberOfPeopleSlice";
import personIcon from "images/icon-person.svg";

const NumberOfPeople = () => {
  const value = useSelector((state) => state.numberOfPeople.value);

  return (
    <InputNumber
      name={"Number Of People"}
      icon={personIcon}
      value={value}
      update={update}
    />
  );
};

export default NumberOfPeople;
