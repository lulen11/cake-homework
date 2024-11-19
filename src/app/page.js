"use client";
import React, { useRef } from "react";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Slider from "./components/Slider/Slider";
import { useTheme } from "./components/ThemeContext/ThemeContext";
import styles from "./page.module.scss";

export default function Home() {
  const modalRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const handleDoneInModal = () => {
    // Ensure theme is set to dark when user finishes with modal
    if (theme !== "dark") toggleTheme();
    // close the modal from inside the component
    modalRef.current.close();
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={`${styles.panel} ${styles.panelIntro}`}>
          <h2>Welcome</h2>
        </section>
        <section className={`${styles.panel} ${styles.panelSwitch}`}>
          <h5>Change the mood</h5>
          <p>Toggle the switch, change it up in here, try a new look.</p>
          <ToggleSwitch />
          <h5>Or try it a different way</h5>
          <p>
            Maybe you prefer a round-about <em>(but fun)</em> approach?
          </p>
          {/* trigger the modal to open via the ref */}
          <Button
            text="Let's try it"
            onClick={() => modalRef.current.open()}
          />{" "}
        </section>
        <section className={`${styles.panel} ${styles.panelSlider}`}>
          <div className={styles.wrapper}>
            <h3>Another Panel</h3>
            <Slider />
          </div>
        </section>

        <Modal ref={modalRef} onDone={handleDoneInModal} />
      </main>
    </div>
  );
}
