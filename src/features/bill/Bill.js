import InputNumber from "components/InputNumber";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./billSlice";
import dollarIcon from "images/icon-dollar.svg";

const Bill = () => {
  const value = useSelector((state) => state.bill.value);
  const action = (value) => {
    return update({ value: value });
  };

  return <InputNumber name={"Bill"} icon={dollarIcon} action={action} />;
};

export default Bill;
