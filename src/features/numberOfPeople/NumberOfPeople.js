import InputNumber from "components/InputNumber";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./numberOfPeopleSlice";
import personIcon from "images/icon-person.svg";

const NumberOfPeople = () => {
  const value = useSelector((state) => state.numberOfPeople.value);
  const action = (value) => {
    return update({ value: value });
  };

  return (
    <InputNumber name={"Number Of People"} icon={personIcon} action={action} />
  );
};

export default NumberOfPeople;
