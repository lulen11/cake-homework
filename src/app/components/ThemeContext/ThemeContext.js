"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import styles from "./ThemeContext.module.scss";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const body = document.body;
    body.classList.remove(styles.light, styles.dark);
    body.classList.add(styles[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
