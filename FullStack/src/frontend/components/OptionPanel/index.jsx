import React from "react";
import { redirectTo } from "../../../library/methods";
import styles from "./styles.module.scss";

const OptionPanel = ({ name, url, description, usersAllowed }) => {
  return (
    <div className={styles.MenuOption}>
      <div className={styles.OptionContainer} onClick={() => redirectTo(url)}>
        <div className={styles.Header}>
          <h3>{name}</h3>
        </div>
        <div className={styles.Body}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OptionPanel;
