"use client";
import React from "react";
import styles from "./Button.module.scss";

export default function Button({ text, onClick, className }) {
  return (
    <button className={`${styles.button} ${className || ""}`} onClick={onClick}>
      {text}
    </button>
  );
}
