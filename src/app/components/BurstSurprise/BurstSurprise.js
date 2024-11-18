"use client";
import React, { useState, useImperativeHandle, forwardRef } from "react";
import styles from "./BurstSurprise.module.scss";

const emojis = ["🍰", "🍓", "🧁", "🍋", "🍫"];

const BurstSurprise = forwardRef((props, ref) => {
  const [burstElements, setBurstElements] = useState([]);

  const triggerBurst = () => {
    const burst = Array.from({ length: 7 }, () => ({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: `${Math.random() * 100 - 50}px`,
      y: `${Math.random() * 100 - 50}px`,
    }));

    setBurstElements(burst);

    setTimeout(() => setBurstElements([]), 1000);
  };

  useImperativeHandle(ref, () => ({
    triggerBurst,
  }));

  return (
    <>
      <div className={styles.burstWrapper}>
        {burstElements.map((burst, index) => (
          <span
            key={index}
            className={styles.burst}
            style={{
              "--burst-x": burst.x,
              "--burst-y": burst.y,
            }}
          >
            {burst.emoji}
          </span>
        ))}
        <button
          style={{ display: "none" }}
          onClick={triggerBurst}
          id="triggerBurst"
        />
      </div>
    </>
  );
});

export default BurstSurprise;
