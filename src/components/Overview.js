import React from "react";
import OverviewRow from "./OverviewRow";

const Overview = () => {
  return (
    <div
      className="flex flex-col
              bg-cyan-dark-3 rounded-md p-6"
    >
      <div className="space-y-6">
        <OverviewRow label={"Tip Amount"} />
        <OverviewRow label={"Total"} />
      </div>
      <button
        className="w-full transition-colors bg-cyan
                font-semibold text-cyan-dark-3 rounded
                p-2 mt-auto hover:bg-cyan-light-2"
      >
        RESET
      </button>
    </div>
  );
};

export default Overview;
