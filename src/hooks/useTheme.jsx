import React, { createContext, useContext } from "react";
import { Theme } from "../utils/Theme";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children, theme = {} }) => {
  return (
    <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
