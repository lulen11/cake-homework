"use client";
import React from "react";
import { useTheme } from "../ThemeContext/ThemeContext";
import styles from "./ToggleSwitch.module.scss";

export default function ToggleSwitch() {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    // fixing this empty function by performing the toggleTheme function after 100ms - oops!
    //  also removed the if statement fto only perform this sublte delay on either theme siwtch️
    setTimeout(() => {
      toggleTheme();
    }, 100);
  };

  return (
    <>
      <div className={styles.toggleSwitch}>
        <span className={styles.label}>Light</span>
        <div
          className={`${styles.switch} ${
            theme === "dark" ? styles.active : ""
          }`}
          onClick={handleToggle}
        >
          <div className={styles.dial}></div>
        </div>
        <span className={styles.label}>Dark</span>
      </div>
    </>
  );
}
