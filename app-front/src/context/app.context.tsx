// DEPENDENCIES
import React, { createContext, useContext } from 'react';
// HOOKS
// import { useLocalStorage } from "../hooks/useLocalStorage";
// INTERFACES
// import { AppContextPropsType } from "./interfaces/app.context.interface";

export const AppContext = createContext<any>({});

export const AppContextProvider: React.FC<any> = ({ children }: any) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = (): any => useContext(AppContext);
