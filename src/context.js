import React, { useContext, useState, useEffect } from "react";
import { data } from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [num, setNum] = useState(0);
  const [obj, setObj] = useState({});

  const getId = (id) => {
    setNum(id);
  };

  useEffect(() => {
    setObj(data[num]);
  }, [num]);

  return (
    <AppContext.Provider value={{ getId, obj }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
