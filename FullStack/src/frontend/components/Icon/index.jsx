import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.scss";

const Icon = ({ noAnimation,icon, name, onClick, ...rest }) => {
  return (
    <div onClick={onClick} className={`${styles.IconContainer} ${name&&styles.WithLabel} ${noAnimation&&styles.NoAnimation}`}>
      <FontAwesomeIcon {...rest} icon={icon} />
      {name && <span>{name}</span>}
    </div>
  );
};

export default Icon;
