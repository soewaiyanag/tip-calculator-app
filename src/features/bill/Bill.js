import InputNumber from "components/InputNumber";
import { useSelector, useDispatch } from "react-redux";
import { update } from "./billSlice";
import dollarIcon from "images/icon-dollar.svg";

const Bill = () => {
  const value = useSelector((state) => state.bill.value);
  const dispatch = useDispatch();

  return <InputNumber name={"Bill"} icon={dollarIcon} />;
};

export default Bill;
