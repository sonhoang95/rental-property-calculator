import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [incomeInfo, setIncomeInfo] = useState({
    totalIncome: 0,
    monthlyIncome: 2500,
    otherIncome: 250,
  });

  const value = { incomeInfo, setIncomeInfo };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
