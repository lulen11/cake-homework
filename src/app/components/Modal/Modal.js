"use client";
import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import Button from "../Button/Button";
import BurstSurprise from "../BurstSurprise/BurstSurprise";
import styles from "./Modal.module.scss";

const Modal = forwardRef(({ onDone }, ref) => {
  // encapsulate / manage the open and close state of the modal so parent doesn't have to
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const burstRef = useRef(null);

  // expose these open/close methods to the parent component
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  const handleNext = () => {
    if (step === 1 && burstRef.current) {
      burstRef.current.triggerBurst();
    }
    if (step < 2) {
      setStep(step + 1);
    } else {
      if (onDone) onDone();
      setIsOpen(false);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        {/* Not using the button component here because I want this element to be unique to this modal */}
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          &#10005;
        </button>

        {step === 1 && (
          <>
            <h2>
              Do you want to try something that&apos;s a treat for the eyes?
            </h2>
            <p>
              Dark themes are known to be nice and healthy for us screen loving
              folk. Do you want to see what could be in store for you?
            </p>
          </>
        )}
        {step === 2 && (
          <>
            <h2>Welcome to the dark side.</h2>
            <p>Good on you for making the healthy choice. Cake party!</p>
          </>
        )}

        <div className={styles.actions}>
          {step > 1 && (
            <Button
              text="Back"
              className={`${styles.button} ${styles.back}`}
              onClick={handleBack}
            />
          )}

          <Button
            text={step < 2 ? "Next" : "Done"}
            className={`${styles.button} ${styles.next}`}
            onClick={handleNext}
          />
        </div>
        <BurstSurprise ref={burstRef} />
      </div>
    </div>
  );
});

Modal.displayName = "Modal";
export default Modal;
