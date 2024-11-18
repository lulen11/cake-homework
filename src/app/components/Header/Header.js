"use client";
import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <span>
          <a
            href="mailto:hello@larasalameh.com?subject=Hi,%20I%20like%20what%20I%20see"
            className={styles.headerContact}
          >
            Lara Salameh
          </a>{" "}
          wants to work with you at
        </span>
        <Logo className={styles.logo} />
      </div>
    </header>
  );
}
