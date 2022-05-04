import InputNumber from "components/InputNumber";
import { useSelector } from "react-redux";
import { update } from "./billSlice";
import dollarIcon from "images/icon-dollar.svg";

const Bill = () => {
  const value = useSelector((state) => state.bill.value);

  return (
    <InputNumber
      name={"Bill"}
      icon={dollarIcon}
      value={value}
      update={update}
    />
  );
};

export default Bill;
