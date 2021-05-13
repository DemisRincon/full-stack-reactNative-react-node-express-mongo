import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.scss";

const Input = ({ id, errorLabel, icon, onClick, ...rest }) => {
  return (
    <div className={styles.MainInputContainer}>
      <div className={styles.Input}>
        <input id={id} {...rest} />
        <div className={icon ? styles.IconContainer : styles.Hidden}>
          <FontAwesomeIcon
            onClick={onClick}
            style={{ color: "#bbb" }}
            icon={icon}
          />
        </div>
      </div>
      <label htmlFor={id}>{errorLabel && errorLabel}</label>
    </div>
  );
};

export default Input;
