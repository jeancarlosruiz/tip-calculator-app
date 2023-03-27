import React from "react";
import styles from "./InputField.module.css";

function InputField({ id, title, variant, value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        className={styles[variant]}
        type="text"
        placeholder="0"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
