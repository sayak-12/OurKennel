/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }) {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <DarkModeContext.Provider value={{ darkmode, toggleDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
