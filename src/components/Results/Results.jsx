import React from "react";
import styles from "./Results.module.css";

function Results() {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.wrapper}>
        <div className={styles.flexGroup}>
          <h2>
            Tip Amount<span>/ person</span>
          </h2>
          <p className={styles.results}>$0.00</p>
        </div>
        <div className={styles.flexGroup}>
          <h2>
            Total<span>/ person</span>
          </h2>
          <p className={styles.results}>$0.00</p>
        </div>
      </div>
      <button className={styles.resetBtn}>Reset</button>
    </div>
  );
}

export default Results;
