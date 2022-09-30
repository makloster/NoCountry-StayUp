import { createContext } from "react";
export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  return (
    <SessionContext.Provider value={{}}> {children}</SessionContext.Provider>
  );
};
