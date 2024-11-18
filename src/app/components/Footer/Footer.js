"use client";
import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles.footer} `}>
      <div className={styles.footerWrapper}>
        <p>
          <a
            href="https://open.spotify.com/playlist/3P098tjN89COeIIcTIy84N?si=534656e8c05b49c2"
            target="_blank"
            className={styles.linkText}
          >
            Hear
          </a>{" "}
          what I heard.{" "}
          <a
            href="https://github.com/lulen11/cake-homework/"
            target="_blank"
            className={styles.linkText}
          >
            See
          </a>{" "}
          what I&apos;ve seen.{" "}
        </p>
      </div>
    </footer>
  );
}
