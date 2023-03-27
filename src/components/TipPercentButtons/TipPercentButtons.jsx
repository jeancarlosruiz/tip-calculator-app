import React from "react";
import styles from "./TipPercentButtons.module.css";

function TipPercentButtons() {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Select Tip %</h2>
        <div className={styles.gridGroup}>
          <button type="button" className={styles.tipButton}>
            5%
          </button>
          <button type="button" className={styles.tipButton}>
            10%
          </button>
          <button type="button" className={styles.tipButton}>
            15%
          </button>
          <button type="button" className={styles.tipButton}>
            20%
          </button>
          <button type="button" className={styles.tipButton}>
            50%
          </button>
          <input type="text" placeholder="Custom" />
        </div>
      </div>
    </>
  );
}

export default TipPercentButtons;
