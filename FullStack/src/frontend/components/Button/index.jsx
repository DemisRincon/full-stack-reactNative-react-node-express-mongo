import React from "react";
import styles from "./styles.module.scss";

const Button = ({ children, text, ...rest }) => {
  return (
    <button className={styles.Button} {...rest}>
      {children || text}
    </button>
  );
};

export default Button;
