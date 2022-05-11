import { createContext, useState } from "react";

export const CustomTipContext = createContext("");

const CustomTipProvider = ({ children }) => {
  const [customValue, setCustomValue] = useState("");
  const value = { customValue, setCustomValue };

  return (
    <CustomTipContext.Provider value={value}>
      {children}
    </CustomTipContext.Provider>
  );
};

export default CustomTipProvider;
