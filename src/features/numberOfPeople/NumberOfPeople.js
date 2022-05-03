import InputNumber from "components/InputNumber";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./numberOfPeopleSlice";
import personIcon from "images/icon-person.svg";

const NumberOfPeople = () => {
  const value = useSelector((state) => state.numberOfPeople.value);
  console.log(value);
  const dispatch = useDispatch();

  return <InputNumber name={"Number Of People"} icon={personIcon} />;
};

export default NumberOfPeople;
