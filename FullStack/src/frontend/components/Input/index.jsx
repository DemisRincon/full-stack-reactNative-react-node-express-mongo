import React from "react";
import styles from './styles.module.scss'

const Input = ({ id, errorLabel,children, ...rest }) => {
  
  return (
    <div className={styles.MainInputContainer}>
      <div className={styles.Input}>
        <input id={id} {...rest} />
        <div className={styles.IconContainer}>
        {children}
          
        </div>
      </div>
      <label htmlFor={id}>{errorLabel&&errorLabel}</label>
    </div>
  );
};

export default Input;
