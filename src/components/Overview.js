import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import OverviewRow from "./OverviewRow";
import tipAmount from "scripts/tipAmount";
import totalTipAmount from "scripts/totalTipAmount";
import intToString from "scripts/intToString";

const Overview = () => {
  const state = useSelector((state) => state);
  const bill = state.bill.value;
  const numberOfPeople = state.numberOfPeople.value;
  const tipPercent = state.tipPercent.value;

  const tipAmountValue = tipAmount({ bill, numberOfPeople, tipPercent });
  const totalTipAmountValue = totalTipAmount({
    bill,
    numberOfPeople,
    tipPercent,
  });

  const formattedTipAmount = intToString(tipAmountValue);
  const formattedTotalTipAmount = intToString(totalTipAmountValue);

  return (
    <div
      className={clsx(
        "flex flex-col bg-cyan-dark-3 rounded-md p-6",
        "min-h-[16rem]"
      )}
    >
      <div className="space-y-6">
        <OverviewRow label={"Tip Amount"} value={formattedTipAmount} />
        <OverviewRow label={"Total"} value={formattedTotalTipAmount} />
      </div>
      <button
        className={clsx(
          "w-full transition-colors bg-cyan",
          "font-semibold text-cyan-dark-3 rounded",
          "p-2 mt-auto hover:bg-cyan-light-2"
        )}
      >
        RESET
      </button>
    </div>
  );
};

export default Overview;
